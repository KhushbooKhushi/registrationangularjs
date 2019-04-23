using System;
using System.Collections.Generic;
using System.Linq;
using System.Web;
using System.Web.Mvc;
using OnlineRegistration.Models;

namespace OnlineRegistration.Controllers
{
    public class LoginController : Controller
    {
        //
        // GET: /Login/


        public ActionResult Index()
        {
            return View();
        }

        public ActionResult Login()
        {
            StringUtils.ToCamelCase("k hs ushk");
            return View();
        }

        public ActionResult NewRegistration()
        {
            return View();
        }

        public ActionResult UploadDocument()
        {
            return View();
        }


        public JsonResult RegistrationCompleted(Student Student)
        {
            try
            {
                OnlineRegistrationDataContext dataContext = new OnlineRegistrationDataContext();

                //var list = (from d in dataContext.AdminLogins
                //            where d.AdminName.ToUpper().Trim() == AdminLogin.AdminName.ToUpper().Trim() && d.AdminPassword == AdminLogin.AdminPassword.Trim()
                //            select d);
                //if (list.Any())
                return Json("Success", JsonRequestBehavior.AllowGet);
                //else
                //    return Json("Not-Success", JsonRequestBehavior.AllowGet);
            }
            catch (Exception)
            {
                return Json("Fail", JsonRequestBehavior.AllowGet);
            }
        }


        public JsonResult LoginResult(AdminLogin AdminLogin)
        {
            try
            {
                OnlineRegistrationDataContext dataContext = new OnlineRegistrationDataContext();

                var list = (from d in dataContext.AdminLogins
                            where d.AdminName.ToUpper().Trim() == AdminLogin.AdminName.ToUpper().Trim() && d.AdminPassword == AdminLogin.AdminPassword.Trim()
                            select d);
                if (list.Any())
                    return Json("Success", JsonRequestBehavior.AllowGet);
                else
                    return Json("Not-Success", JsonRequestBehavior.AllowGet);
            }
            catch (Exception)
            {
                return Json("Fail", JsonRequestBehavior.AllowGet);
            }
        }
    }
}
