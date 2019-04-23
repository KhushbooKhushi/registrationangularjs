using OnlineRegistration.Models;
using System;
using System.Collections.Generic;
using System.IO;
using System.Linq;
using System.Web;
using System.Web.Mvc;

namespace OnlineRegistration.Controllers
{
    public class UploadDocumentController : Controller
    {
        //
        // GET: /UploadDocument/

        public ActionResult UploadDocumentView()
        {
            return View();
        }


        public JsonResult SaveDocument(Document doucment)
        {
            try
            {
                OnlineRegistrationDataContext dbContext = new OnlineRegistrationDataContext();
                var jsonData = "";
                if (doucment != null)
                {
                    Document doc = new Document();
                    //attraction.AttractionId = model.AttractionId;
                    //attraction.CityId = model.CityId;
                    //attraction.AttractionTitle = model.AttractionTitle;
                    //attraction.AttractionDetails = model.AttractionDetails;

                    //at.PhotoPath = li.
                    //if (!string.IsNullOrWhiteSpace(model.AttractionPhoto.ToString()))
                    //{
                    //    string pic = Guid.NewGuid().ToString() + ".jpg";
                    //    byte[] imageBytes = Convert.FromBase64String(model.AttractionPhoto.ToString());

                    //    MemoryStream ms = new MemoryStream(imageBytes, 0, imageBytes.Length);
                    //    ms.Write(imageBytes, 0, imageBytes.Length);
                    //    System.Drawing.Image image = System.Drawing.Image.FromStream(ms, true);

                    //    image.Save(Server.MapPath("~/images/" + pic));

                    //    attraction.AttractionPhoto = pic;
                    //}

                    //dbContext.Attractions.Add(attraction);
                    //dbContext.SaveChanges();
                    //jsonData = "Information Saved Successfully !!";
                }
                else
                {
                    jsonData = "Information Not Found !!";
                }
                return Json(jsonData, JsonRequestBehavior.AllowGet);
            }
            catch (Exception ex)
            {
                return Json(new { errorMsg = ex.Message }, JsonRequestBehavior.AllowGet);
            }
        }
    }
}
