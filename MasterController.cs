using System;
using System.Collections.Generic;
using System.Linq;
using System.Web;
using System.Web.Mvc;

namespace OnlineRegistration.Models
{
    public class MasterController : Controller
    {
        //
        // GET: /Master/
        //Load NationalityList
        public JsonResult GetNationalityList()
        {
            try
            {
                var jsonData = LoadData.GetValues<Nationality>(new int[] { }, false).ToList();
                return Json(jsonData, JsonRequestBehavior.AllowGet);
            }
            catch (Exception ex)
            {
                return Json(new { errorMsg = ex.Message }, JsonRequestBehavior.AllowGet);
            }
        }

        //Load ReligiousList
        public JsonResult GetReligiouList()
        {
            try
            {
                var jsonData = LoadData.GetValues<Religioun>(new int[] { }, false).ToList();
                return Json(jsonData, JsonRequestBehavior.AllowGet);
            }
            catch (Exception ex) 
            {
                return Json(new { errorMsg = ex.Message }, JsonRequestBehavior.AllowGet);
            }
        }


        //Load CategoryList
        public JsonResult GetCategoryList()
        {
            try
            {
                var jsonData = LoadData.GetValues<CategoryEnum>(new int[] { }, false).ToList();
                return Json(jsonData, JsonRequestBehavior.AllowGet);
            }
            catch (Exception ex)
            {
                return Json(new { errorMsg = ex.Message }, JsonRequestBehavior.AllowGet);
            }
        }
    }
}
