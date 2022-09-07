import mutations from "./mutations.js";
import actions from "./actions.js";
import getters from "./getters.js"

export default {
  namespaced: true,
  state() {
    return {
      bulletins:
            [{
              "bulletin_id": 1,
              "bulletin_title": "Sformowanie+eskadry",
              "bulletin_text": "%3Cimg+style%3D%22float%3A+left%3B+margin-right%3A+10px%3B%22+src%3D%22https%3A%2F%2Fi.imgur.com%2FokHe5mz.png%22+width%3D%22200%22%3EZ+dniem+10+czerwca+2020+roku+powsta%C5%82a+eskadra+VMFA-117+%22Mighty+Wombats%22.+Nasza+idea+to+wysoki+poziom+realizmu+bez+niepotrzebnej+spiny.+Nasz+szczeg%C3%B3%C5%82owy+statut+jest+dost%C4%99pny+%3Ca+href%3D%27https%3A%2F%2Fforum.gildia.org%2Fviewtopic.php%3Ff%3D141%26t%3D3723%26p%3D18231%23p18231%27+style%3D%27color%3A+cyan%3B%27%3Ena+gildia.org%3C%2Fa%3E+oraz+w+zak%C5%82adce+%3Ca+href%3D%27http%3A%2F%2Fvmfa-117.org%2Fonas.php%27+style%3D%27color%3A+cyan%3B%27+target%3D_blank%3E%22o+nas%22%3C%2Fa%3E.",
              "bulletin_date": "2020-06-12",
              "timestamp": "2022-09-07T09:32:13.000Z"
            },
            {
              "bulletin_id": 2,
              "bulletin_title": "Rekrutacja",
              "bulletin_text": "%3Cimg+style%3D%22float%3A+left%3B+margin-right%3A+10px%3B%22+src%3D%22https%3A%2F%2Fi.imgur.com%2F2Dcy9HN.jpg%22+width%3D%22200%22%3EW+zwi%C4%85zku+z+rozpocz%C4%99ciem+funkcjonowania+naszej+eskadry%2C+zach%C4%99camy+do+zg%C5%82aszania+si%C4%99+do+naszego+programu.+Docelowo+chcemy+oferowa%C4%87+kadetom+kompleksowe+szkolenie+zahaczaj%C4%85ce+o+mo%C5%BCliwie+wszystkie+aspekty+samolotu+F%2FA-18C.+Oczywi%C5%9Bcie+na+t%C4%99+chwil%C4%99%2C+program+jest+dopiero+rozwijany.%3C%2Fbr%3E%3C%2Fbr%3E%0D%0A%0D%0AChcemy+ludzi+autentycznie+zainteresowanym+lataniem+Hornetem.+Takich+co+w+wolnej+chwili+lubi%C4%85+sobie+strzeli%C4%87+OK+3%2C+a+w+ramach+pi%C4%85tkowego+relaksu+chc%C4%85+zrobi%C4%87+z+kolegami+p%C4%99tl%C4%99+w+parade+fomation.+Czyli+takich%2C+kt%C3%B3rym+nie+zabraknie+determinacji+i+wytrwa%C5%82o%C5%9Bci.%0D%0A%3C%2Fbr%3E%3C%2Fbr%3E%0D%0ANie+jeste%C5%9Bmy+tu+po+to%2C+%C5%BCeby+filtrowa%C4%87+%22tych+najlepszych%22.+Chcemy+da%C4%87+Ci+pole+i+zasoby%2C+%C5%BCeby%C5%9B+sta%C5%82+si%C4%99+tak+dobrym+v-pilotem%2C+na+jakiego+Ci%C4%99+sta%C4%87.+W+zamian+liczymy+na+to%2C+%C5%BCe+b%C4%99dziemy+si%C4%99+dobrze+bawi%C4%87+przy+wsp%C3%B3lnych+misjach+na+%3Ca+href%3D%27https%3A%2F%2Fforum.gildia.org%2F%27+target%3D_blank%3Egildii.org%3C%2Fa%3E%2C+serewerach+otwartych+i+w+misjach+z+innymi+spo%C5%82eczno%C5%9Bciami.%0D%0A%3C%2Fbr%3E%3C%2Fbr%3E%0D%0ADok%C5%82adniejsze+informacje+dotycz%C4%85ce+aktualnego+statusu+rekrutacji+znajdziesz+w+zak%C5%82adce+%3Ca+href%3D%27http%3A%2F%2Fvmfa-117.org%2Fkontakt.php%27%3EKontakt%2Frekrutacja%3C%2Fa%3E.",
              "bulletin_date": "2020-06-12",
              "timestamp": "2022-09-07T09:32:13.000Z"
            },
            {
              "bulletin_id": 3,
              "bulletin_title": "Pierwsze+2+miesi%C4%85ce",
              "bulletin_text": "No+i+po+pierwszych+dwÃ³ch+miesiÄ…cach+eskadra+ruszyÅ‚a+z+kopyta.+ZaczÄ™liÅ›my+we+dwÃ³ch,+teraz+jest+nas+szeÅ›ciu,+a+3+z+4+naszych+kadetÃ³w+wÅ‚aÅ›nie+koÅ„czy+ogÃ³lnolotniczÄ…+czÄ™Å›Ä‡+szkolenia.\n</br></br>\nMamy+za+sobÄ…+wszystkiego+juÅ¼+43+loty,+w+tym+pierwszÄ…+kampaniÄ™+na+Gildia.org+-+<a+href='https://forum.gildia.org/viewtopic.php?f=59&t=3665'+target=_blank>Operation+Clothing+napisanÄ…+przez+Avantara</a>.+W+jej+ramach+wykonaliÅ›my+cztery+loty+bojowe,+w+sumie+10+sorties+-+w+tym+raz+obsadziliÅ›my+4-ship.+Sukcesem+zakoÅ„czyliÅ›my+2x+CAP,+1x+Escort,+1x+Anti+Ship.+Ponadto+dwukrotnie+prowadziliÅ›my+koordynacjÄ™+operacji+ze+stanowiska+AWACS.+ZestrzeliliÅ›my+4+nieprzyjacielskie+samoloty,+w+tym+2ndLT+Kisi+trzy+zestrzelenia+-+w+swoich+pierwszych+misjach+bojowych,+nie+ma+lipy.+ZniszczyliÅ›my+trzy+elementy+Przeciwlotniczych+ZestawÃ³w+PociskÃ³w+Rakietowych+i+uszkodziliÅ›my+dwa+wrogie+okrÄ™ty.</br></br>MyÅ›lÄ™,+Å¼e+sÄ…+powody+do+zadowolenia,+chociaÅ¼+Warfighter+lekko+od+czerwonych+oberwaÅ‚;)",
              "bulletin_date": "2020-08-17",
              "timestamp": "2022-09-07T09:32:13.000Z"
            },
            {
              "bulletin_id": 4,
              "bulletin_title": "1.+Loty+Testowe",
              "bulletin_text": "%3Cimg+style%3D%22float%3A+left%3B+margin-right%3A+10px%3B%22+src%3D%22https%3A%2F%2Fi.imgur.com%2F4AMy6xp.png%3F2%22+width%3D%22300%22%3EDw%C3%B3ch+pierwszych+kadet%C3%B3w+zaliczy%C5%82o+swoje+loty+testowe+z+podstawowych+umiej%C4%99tno%C5%9Bci+lotniczych+i+przechodz%C4%85+do+szkole%C5%84+bojowych.%0D%0A%3Cbr%3E%0D%0A%3Cbr%3E%0D%0A22.08+i+28.08+odpowiednio+Kisi+i+aliant+pokazali+zdobyte+podczas+pierwszej+cz%C4%99%C5%9Bci+szkolenia+umiej%C4%99tno%C5%9Bci.+Mimo%2C+%C5%BCe+nie+oddali+w+tym+czasie+ani+jednego+strza%C5%82u%2C+zgodnie+twierdzili%2C+%C5%BCe+by%C5%82a+to+kupa+zabawy.+Teraz+pora+%22co%C5%9B+wybuchn%C4%85%C4%87%22.",
              "bulletin_date": "2020-08-28",
              "timestamp": "2022-09-07T09:32:13.000Z"
            },
            {
              "bulletin_id": 5,
              "bulletin_title": "Pierwszy+strza%C5%82+na+poligonie",
              "bulletin_text": "%3Cimg+style%3D%22float%3A+left%3B+margin-right%3A+10px%3B%22+src%3D%22https%3A%2F%2Fi.imgur.com%2FSmkWbCr.png%22+width%3D%22300%22%3EKadet+Kisi+w+ramach+szkolenia+z+obrony+przed+zagro%C5%BCeniami+z+ziemi+w+dn.+09.09.2020+dokona%C5%82+historycznego+pierwszego+strza%C5%82u+na+naszym+poligonie%2C+odpalaj%C4%85c+AGM-88+HARM+w+trybie+Self-Protect+w+kierunku+atrapy+SA-3+Goa+%28Newa%29.%0D%0A%3Cbr%3E%3Cbr%3E+Oczywi%C5%9Bcie+skutecznie+%3A%29",
              "bulletin_date": "2020-09-10",
              "timestamp": "2022-09-07T09:32:13.000Z"
            }]
    }
  },
  mutations,
  actions,
  getters
}
