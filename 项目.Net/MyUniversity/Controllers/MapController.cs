using System;
using System.Collections.Generic;
using System.Linq;
using System.Web;
using System.Web.Mvc;
using System.Data;
using System.Data.SqlClient;

namespace MyUniversity.Controllers
{
    public class MapController : Controller
    {
        // GET: Map
        public ActionResult Index()
        {
            if (Request.QueryString["id"] != null)
            {
                string mapId = Request.QueryString["id"];

                string cSql = "select * from Maps where MapId=@MapId";
                DataTable dtC = SqlHelper.ExecuteDataTable(cSql,
                    new SqlParameter("@MapId", mapId));
                ViewData["dtC"] = dtC;

                string uSql = "select * from Maps where MapOweId=@MapOweId";
                DataTable dtU = SqlHelper.ExecuteDataTable(uSql,
                    new SqlParameter("@MapOweId", dtC.Rows[0]["MapNextId"]));
                ViewData["dtU"] = dtU;

                string rSql = "select * from Maps where MapOweId=@MapOweId";
                DataTable dtR = SqlHelper.ExecuteDataTable(rSql,
                    new SqlParameter("@MapOweId", dtC.Rows[0]["MapRightId"]));
                ViewData["dtR"] = dtR;

                string bSql = "select * from Maps where MapOweId=@MapOweId";
                DataTable dtB = SqlHelper.ExecuteDataTable(bSql,
                    new SqlParameter("@MapOweId", dtC.Rows[0]["MapBackId"]));
                ViewData["dtB"] = dtB;

                string lSql = "select * from Maps where MapOweId=@MapOweId";
                DataTable dtL = SqlHelper.ExecuteDataTable(lSql,
                    new SqlParameter("@MapOweId", dtC.Rows[0]["MapLeftId"]));
                ViewData["dtL"] = dtL;


                
            }
                return View();
        }
    }
}