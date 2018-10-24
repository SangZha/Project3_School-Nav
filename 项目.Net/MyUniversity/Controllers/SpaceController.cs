using System;
using System.Collections.Generic;
using System.Linq;
using System.Web;
using System.Web.Mvc;
using System.Data;
using System.Data.SqlClient;

namespace MyUniversity.Controllers
{
    public class SpaceController : Controller
    {
        // GET: Spce
        public ActionResult Index()
        {
            if (Request.QueryString["id"] != null)
            {
                DataTable dt4 = new DataTable();
                DataTable dt5 = new DataTable();
                DataTable dt6 = new DataTable();
                dt4.Columns.Add("UserName");
                dt4.Columns.Add("UserFace");
                dt5.Columns.Add("TopicId");
                dt5.Columns.Add("TopicTitle");
                dt6.Columns.Add("SchoolName");

                string UserId = Request.QueryString["id"];

                string searchMeSql = "select * from Users where UserId=@UserId";
                DataTable dtmyInfo = SqlHelper.ExecuteDataTable(searchMeSql,
                    new SqlParameter("@UserId", UserId));
                
                string searchTopicSql = "select * from Topics where UserId=@UserId";
                DataTable dttopicInfo = SqlHelper.ExecuteDataTable(searchTopicSql,
                    new SqlParameter("@UserId", UserId));

                string searchReplySql = "select * from TopicReplies where ReplyToId=@ReplyToId";
                DataTable dtreplyInfo = SqlHelper.ExecuteDataTable(searchReplySql,
                    new SqlParameter("@ReplyToId", UserId));
                

                for (int i = 0; i < dtreplyInfo.Rows.Count; i++)
                {
                    string searchUsersq4 = "select UserName,UserFace from Users where UserId=@UserId";
                    DataTable dtu = SqlHelper.ExecuteDataTable(searchUsersq4,
                        new SqlParameter("@UserId", dtreplyInfo.Rows[i]["UserId"].ToString()));
                    dt4.ImportRow(dtu.Rows[0]);
                }
                for (int i = 0; i < dttopicInfo.Rows.Count; i++)
                {
                    string searchUsersq4 = "select * from Topics where TopicId=@TopicId";
                    DataTable dtt = SqlHelper.ExecuteDataTable(searchUsersq4,
                        new SqlParameter("@TopicId", dttopicInfo.Rows[i]["TopicId"].ToString()));
                    dt5.ImportRow(dtt.Rows[0]);
                }

                for (int i = 0; i < dttopicInfo.Rows.Count; i++)
                {
                    string searchUsersq4 = "select * from Schools where SchoolId=@SchoolId";
                    DataTable dts = SqlHelper.ExecuteDataTable(searchUsersq4,
                        new SqlParameter("@SchoolId", dttopicInfo.Rows[i]["SchoolId"].ToString()));
                    dt6.ImportRow(dts.Rows[0]);
                }

                ViewData["dt1"] = dtmyInfo;
                ViewData["dt2"] = dttopicInfo;
                ViewData["dt3"] = dtreplyInfo;
                ViewData["dt4"] = dt4;
                ViewData["dt5"] = dt5;
                ViewData["dt6"] = dt6;

                return View();
            }
            else
            {
                return RedirectToAction("Index", "Comment");
            }
                
        }
        public ActionResult Edit()
        {
            string UserName = Request["UserName"];
            string UserSign = Request["UserSign"];
            string UserFrom = Request["UserFrom"];
            string UserSchool = Request["UserSchool"];
            string UserGrade = Request["UserGrade"];
            string UserSex = Request["UserSex"];

            string editSql = "update Users set UserName=@UserName,UserSign=@UserSign,UserFrom=@UserFrom,UserSchool=@UserSchool,UserGrade=@UserGrade,UserSex=@UserSex where UserAccount = @UserAccount";
            SqlParameter accountParameter = new SqlParameter("@UserAccount", Session["useraccount"]);
            SqlParameter nameParameter = new SqlParameter("@UserName", UserName);
            SqlParameter signParameter = new SqlParameter("@UserSign", UserSign);
            SqlParameter fromParameter = new SqlParameter("@UserFrom", UserFrom);
            SqlParameter schoolParameter = new SqlParameter("@UserSchool", UserSchool);
            SqlParameter gradeParameter = new SqlParameter("@UserGrade", UserGrade);
            SqlParameter sexParameter = new SqlParameter("@UserSex", UserSex);

            SqlHelper.ExecuteNonQuery(editSql, accountParameter, nameParameter, signParameter, fromParameter, schoolParameter, gradeParameter, sexParameter);

            return Content("ok");
        }
    }
}