using Microsoft.AspNetCore.Mvc.RazorPages;
using ServiceStack.Text;
using System;
using System.Linq;
using System.Net.Http.Formatting;
using System.Net.Http.Headers;

namespace Stemwijzer_Front_End_Challenge.Pages
{

    public class IndexModel : PageModel
    {

        string[] Antwoorden = new string[] { "-", "-", "-", "-" };
        public void OnGet()
        {
            

        }
        public void OnPost()
        {

            var ant = Request.Form["Answer"].ToString();
            string vraagnummer = Request.Form["questionnumber"].ToString();
            int intvraagnummer =  int.Parse(vraagnummer);

            Antwoorden.SetValue(ant, intvraagnummer);
            Antwoorden.Count();
        }

        public void Bindend_referendum(string[] Antwoorden)
        {
            string antwoord = Response.ToString();
            Antwoorden.SetValue(antwoord, 0);
        }

        public void Maatschappelijke_dienstplicht(string[] Antwoorden)
        {
            string antwoord = Response.ToString();
            Antwoorden.SetValue(antwoord, 1);

        }

        public void Anoniem_solliciteren(string[] Antwoorden)
        {
            string antwoord = Response.ToString();
            Antwoorden.SetValue(antwoord, 2);

        }

        public void Groepsbelediging(string[] Antwoorden)
        {
            string antwoord = Response.ToString();
            Antwoorden.SetValue(antwoord, 3);

        }


        public  int Startvragen(int Nummer)
        {
            Nummer++;       
            if (Nummer == 1 )
            {
                Bindend_referendum(Antwoorden);
            }
            if (Nummer == 2)
            {
                Maatschappelijke_dienstplicht(Antwoorden);
            }
            if (Nummer == 3)
            {
                Anoniem_solliciteren(Antwoorden);
            }
            if (Nummer == 4)
            {
                Groepsbelediging(Antwoorden);
            }

            else
            {
                
            }

            return (Nummer);

        }
    
        public void Check()
        {
          string ant1 = (string)Antwoorden.GetValue(0);
            if (ant1 == "-") { Bindend_referendum(Antwoorden); }

            string ant2 = (string)Antwoorden.GetValue(1);
            if (ant2 == "-") { Maatschappelijke_dienstplicht(Antwoorden); }

            string ant3 = (string)Antwoorden.GetValue(2);
            if (ant3 == "-") { Anoniem_solliciteren(Antwoorden); }

            string ant4 = (string)Antwoorden.GetValue(3);
            if (ant4 == "-") { Groepsbelediging(Antwoorden); }

            else
            {

            }
        }

        
    }
}
