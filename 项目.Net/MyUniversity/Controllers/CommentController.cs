using System;
using System.Collections.Generic;
using System.Linq;
using System.Web;
using System.Web.Mvc;
using System.Data.SqlClient;
using System.Data;
using MyUniversity.Models;

namespace MyUniversity.Controllers
{
    public class CommentController : Controller
    {
        // GET: Comment
        public ActionResult Index()
        {
            if (Request.QueryString["id"]!=null) {

                if (Session["useraccount"] != null)
                {
                    string searchMeSql = "select * from Users where UserAccount=@UserAccount";
                    DataTable dtmyInfo = SqlHelper.ExecuteDataTable(searchMeSql,
                        new SqlParameter("@UserAccount", Session["useraccount"]));
                        ViewData["dtMe"] = dtmyInfo;
                }

                DataTable dtAllUser = new DataTable();
                dtAllUser.Columns.Add("UserName");
                dtAllUser.Columns.Add("UserFace");
                string schoolId = Request.QueryString["id"];
            string searchTopicSql = "select * from Topics where SchoolId=@SchoolID";
            DataTable dtTopic = SqlHelper.ExecuteDataTable(searchTopicSql,
                new SqlParameter("@SchoolId", schoolId));

            for(int i=0; i < dtTopic.Rows.Count; i++) { 
                string searchUsersql = "select * from Users where UserId=@UserId";
                DataTable dtOneUser = SqlHelper.ExecuteDataTable(searchUsersql,
                    new SqlParameter("@UserId", dtTopic.Rows[i]["UserId"].ToString()));
                dtAllUser.ImportRow(dtOneUser.Rows[0]);
            }

            
            ViewData["dtUser"] = dtAllUser;
            ViewData["dtTopic"] = dtTopic;

            return View();
            }
            else {
                if (Session["useraccount"] != null)
                {
                    string searchMeSql = "select * from Users where UserAccount=@UserAccount";
                    DataTable dtmyInfo = SqlHelper.ExecuteDataTable(searchMeSql,
                        new SqlParameter("@UserAccount", Session["useraccount"]));
                    ViewData["dtMe"] = dtmyInfo;
                }
                DataTable dtAllUser = new DataTable();
                dtAllUser.Columns.Add("UserName");
                dtAllUser.Columns.Add("UserFace");
            string schoolId = "1";
            string searchTopicSql = "select * from Topics where SchoolId=@SchoolID";
            DataTable dtTopic = SqlHelper.ExecuteDataTable(searchTopicSql,
                new SqlParameter("@SchoolId", schoolId));

            for (int i = 0; i < dtTopic.Rows.Count; i++)
            {
                string searchUsersql = "select * from Users where UserId=@UserId";
                DataTable dtOneUser = SqlHelper.ExecuteDataTable(searchUsersql,
                    new SqlParameter("@UserId", dtTopic.Rows[i]["UserId"].ToString()));
                dtAllUser.ImportRow(dtOneUser.Rows[0]);
            }

            ViewData["dtUser"] = dtAllUser;
            ViewData["dtTopic"] = dtTopic;

            return View("");
            }
        }
        public ActionResult Post()
        {
            if (Session["useraccount"] != null)
            {
                string searchMeSql = "select * from Users where UserAccount=@UserAccount";
                DataTable dtmyInfo = SqlHelper.ExecuteDataTable(searchMeSql,
                    new SqlParameter("@UserAccount", Session["useraccount"]));

            this.TempData["schoolid"] = Request.QueryString["id"];
            return View();
            }

            else
            {
                return RedirectToAction("Home", "Home");
            }
        }
        public ActionResult OnloadTopic()
        {
            //获取数据
            string searchMeSql = "select * from Users where UserAccount=@UserAccount";
            DataTable dtmyInfo = SqlHelper.ExecuteDataTable(searchMeSql,
                new SqlParameter("@UserAccount", Session["useraccount"]));

            string schoolid = this.TempData["schoolid"] as string;
            string topicTitle = Request["TopicTitle"];
            string topicContent = Request["TopicContent"];
            string topicTime = DateTime.Now.ToString();
            //插入数据
            string insertSql = "insert Topics values(@TopicTitle,@TopicContent,@TopicTime,@UserId,@SchoolId)";
            SqlHelper.ExecuteNonQuery(insertSql,
                new SqlParameter("@TopicTitle", topicTitle),
                new SqlParameter("@TopicContent", topicContent),
                new SqlParameter("@TopicTime", topicTime),
                new SqlParameter("@UserId", dtmyInfo.Rows[0]["UserId"]),
                new SqlParameter("@SchoolId", schoolid));

            return Content("OK");
        }
        public ActionResult Topic()
        {
            this.TempData["topicid"] = Request.QueryString["id"];
            if (Request.QueryString["id"] != null)
            {
                string topicId = Request.QueryString["id"];

                DataTable dtN = new DataTable();
                dtN.Columns.Add("UserName");
                dtN.Columns.Add("UserFace");

                string searchSql1 = "select * from Topics where TopicId=@TopicId";
                DataTable dt1 = SqlHelper.ExecuteDataTable(searchSql1,
                    new SqlParameter("@TopicId", topicId));
                if (dt1.Rows.Count == 0)
                {
                    return View("Index");
                }
                    string searchSql2 = "select * from Users where UserId=@UserId";
                DataTable dt2 = SqlHelper.ExecuteDataTable(searchSql2,
                    new SqlParameter("@UserId", dt1.Rows[0]["UserId"]));
                string searchSql3 = "select * from TopicReplies where TopicId=@TopicId";
                DataTable dt3 = SqlHelper.ExecuteDataTable(searchSql3,
                    new SqlParameter("@TopicId", topicId));

                for (int i = 0; i < dt3.Rows.Count; i++)
                {
                    string searchUsersq4 = "select UserName,UserFace from Users where UserId=@UserId";
                    DataTable dt4 = SqlHelper.ExecuteDataTable(searchUsersq4,
                        new SqlParameter("@UserId", dt3.Rows[i]["UserId"].ToString()));

                    //  if(dt4.Rows[0]["UserName"].ToString() == "0")
                    //   {
                    //       dtN.Rows.Add("无");
                    //  }
                    dtN.ImportRow(dt4.Rows[0]);
                }
                if (Session["useraccount"] != null)
                {
                    string searchSql5 = "select * from Users where UserAccount=@UserAccount";
                    DataTable dt5 = SqlHelper.ExecuteDataTable(searchSql5,
                        new SqlParameter("@UserAccount", Session["useraccount"]));
                    ViewData["dt5"] = dt5;
                }

                ViewData["dt1"] = dt1;
                ViewData["dt2"] = dt2;
                ViewData["dt3"] = dt3;
                ViewData["dt4"] = dtN;

                return View();
            }
            else
            {
                string topicId = "1";

                DataTable dtN = new DataTable();
                dtN.Columns.Add("UserName");
                dtN.Columns.Add("UserFace");

                string searchSql1 = "select * from Topics where TopicId=@TopicId";
                DataTable dt1 = SqlHelper.ExecuteDataTable(searchSql1,
                    new SqlParameter("@TopicId", topicId));
                string searchSql2 = "select * from Users where UserId=@UserId";
                DataTable dt2 = SqlHelper.ExecuteDataTable(searchSql2,
                    new SqlParameter("@UserId", dt1.Rows[0]["UserId"]));
                string searchSql3 = "select * from TopicReplies where TopicId=@TopicId";
                DataTable dt3 = SqlHelper.ExecuteDataTable(searchSql3,
                    new SqlParameter("@TopicId", topicId));

                for (int i = 0; i < dt3.Rows.Count; i++)
                {
                    string searchUsersq4 = "select UserName,UserFace from Users where UserId=@UserId";
                    DataTable dt4 = SqlHelper.ExecuteDataTable(searchUsersq4,
                        new SqlParameter("@UserId", dt3.Rows[i]["UserId"].ToString()));

                    //  if(dt4.Rows[0]["UserName"].ToString() == "0")
                    //   {
                    //       dtN.Rows.Add("无");
                    //  }
                    dtN.ImportRow(dt4.Rows[0]);
                }
                if (Session["useraccount"] != null)
                {
                    string searchSql5 = "select * from Users where UserAccount=@UserAccount";
                    DataTable dt5 = SqlHelper.ExecuteDataTable(searchSql5,
                        new SqlParameter("@UserAccount", Session["useraccount"]));
                    ViewData["dt5"] = dt5;
                }

                ViewData["dt1"] = dt1;
                ViewData["dt2"] = dt2;
                ViewData["dt3"] = dt3;
                ViewData["dt4"] = dtN;
                return View();
            }
        }
        public ActionResult TopicReply()
        {
            string ReplyContent = Request["ReplyContent"];
            string ReplyTime = DateTime.Now.ToString();
            string TopicId = this.TempData["topicid"] as string;

            string searchSql = "select * from Users where UserAccount=@UserAccount";
            DataTable dts = SqlHelper.ExecuteDataTable(searchSql,
                new SqlParameter("@UserAccount", Session["useraccount"]));
            string UserId = dts.Rows[0]["UserId"].ToString();

            string insertSql = "insert TopicReplies values(@ReplyContent,@ReplyTime,@TopicId,@UserId,@RelyToId)";
            SqlHelper.ExecuteNonQuery(insertSql,
                new SqlParameter("@ReplyContent", ReplyContent),
                new SqlParameter("@ReplyTime", ReplyTime),
                new SqlParameter("@TopicId", TopicId),
                new SqlParameter("@UserId", UserId),
                new SqlParameter("@RelyToId", "0"));

            return Redirect("/Comment/Topic?id=" + TopicId + "");
        }
    }
}