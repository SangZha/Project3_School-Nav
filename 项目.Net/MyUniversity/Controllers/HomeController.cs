using System;
using System.Collections.Generic;
using System.Linq;
using System.Web;
using System.Web.Mvc;
using System.Data.SqlClient;
using System.Configuration;
using System.Data;

namespace MyUniversity.Controllers
{

    public class HomeController : Controller
    {
        public ActionResult Home()
        {
            
            string topicSql = "SELECT TOP 4 * FROM Topics";
            DataTable dtTopic = SqlHelper.ExecuteDataTable(topicSql);

            ViewData["dt1"] = dtTopic;
            if (Session["useraccount"] != null) {

                string searchSql = "select * from Users where UserAccount=@UserAccount";
                DataTable userInfo = SqlHelper.ExecuteDataTable(searchSql,
                    new SqlParameter("@UserAccount", Session["useraccount"]));
                string userface = userInfo.Rows[0]["UserFace"].ToString();
                ViewData["userface"] = userface;
                ViewData["username"] = Session["username"];
                return View();
            }
            else
            {
                return View();
            }
        }
        public ActionResult Login()
        {
            //获取数据
            string userAccount = Request["UserAccount"];
            string userPassword = Request["UserPassword"];
            //验证数据
            string validateSql = "select * from Users where UserAccount=@UserAccount and @UserPassword=UserPassword";
            DataTable userInfo = SqlHelper.ExecuteDataTable(validateSql,
                new SqlParameter("@UserAccount", userAccount),
                new SqlParameter("@UserPassword",userPassword));
            if (userInfo.Rows.Count==0)
            {
                return RedirectToAction("Home");
            }
            else
            {
                System.Web.HttpContext.Current.Session["useraccount"] = userAccount;
                return RedirectToAction("Index","Comment");
            }
        }
        public ActionResult Register()
        {   
            //获取数据
            string userName = Request["UserName"];
            string userAccount = Request["UserAccount"];
            string userPassword = Request["UserPassword"];
            //插入数据
            string insertSql = "insert Users values(@UserName,@UserAccount,@UserPassword,@UserSign,@UserFrom,@UserSchool,@UserGrade,@UserSex,@UserFace)";
            SqlHelper.ExecuteNonQuery(insertSql,
                new SqlParameter("@UserName", userName),
                new SqlParameter("@UserAccount", userAccount),
                new SqlParameter("@UserPassword", userPassword),
                new SqlParameter("@UserSign", ""),
                new SqlParameter("@UserFrom", ""),
                new SqlParameter("@UserSchool", ""),
                new SqlParameter("@UserGrade", ""),
                new SqlParameter("@UserSex", ""),
                new SqlParameter("@UserFace", "../img/university-head.jpg"));

            return RedirectToAction("Index", "Comment");
        }
    }
}