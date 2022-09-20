<template>
  <div>
    <div class="cvw22_container">
      <h2 class="hidden">CVW-22</h2>
      <div class="desc">
        <p>Virtual Carrier Air Wing 22 to wirtualne skrzydło lotnictwa pokładowego składające się z eskadr morskich USN/USMC działających w ramach Polskiej Społeczności DCS World - Gildia DCS. <br><br> Każda z eskadr jest oddzielną jednostką z własnym dowództwem, specjalizacją, szkoleniem i charakterem, natomiast wszystkie dzielą wspólny lotniskowiec i związane z tym procedury.</p>
      </div>
      <div class="logos">
        <div class="logo_cvw"></div>
        <div class="logo_gildia"></div>
      </div>
      <div class="wings_table">
        <table>
          <tr class="wings_table_header">
            <th class="col_1">Squadron</th>
            <th class="col_2">Nickname</th>
            <th class="col_3">Modex</th>
            <th class="col_4">Callsign</th>
            <th class="col_5">Aircraft</th>
          </tr>
          <tr>
            <th class="col_1">VF-31</th>
            <th>Tomcatters</th>
            <th>1xx</th>
            <th>"Felix"</th>
            <th>F-14B</th>
          </tr>
          <tr>
            <th>VFA-418</th>
            <th>Black Swans</th>
            <th>2xx</th>
            <th>"Swan"</th>
            <th>F/A-18C</th>
          </tr>
          <tr>
            <th>VFA-313</th>
            <th>Hellhounds</th>
            <th>3xx</th>
            <th>"Hound"</th>
            <th>F/A-18C</th>
          </tr>
          <tr>
            <th>VFA-203</th>
            <th>Blue Dolphins</th>
            <th>4xx</th>
            <th>"Dolphin"</th>
            <th>F/A-18C</th>
          </tr>
          <tr class="wombats_row">
            <th>VMFA-117</th>
            <th>Mighty Wombats</th>
            <th>5xx</th>
            <th>"Jarhead"</th>
            <th>F/A-18C</th>
          </tr>
        </table>
      </div>
    </div>
  </div>
</template>

<script>
import UnderConstruction from "@/pages/home/components/UnderConstruction";
export default {
  name: "SectionAirwing",
  components: { UnderConstruction },
};
</script>

<style scoped lang="scss">
.cvw22_container {
  height: 100%;
  display: flex;
  flex-direction: column;
  flex-wrap: nowrap;
  justify-content: flex-start;
  align-items: center;
  font-size: 1.15rem;
  color: $wombat_white;
  .desc {
    height: auto;
    width: 80%;
    margin: 2%;
    text-align: center;
  }

  .logos {
    height: 250px;
    width: 80%;
    display: flex;
    flex-direction: row;
    justify-content: center;
    align-items: center;
    background-repeat: no-repeat;

    .logo_cvw {
      background-image: url("https://wombats.s3.eu-central-1.amazonaws.com/cvw22.svg");
      background-repeat: no-repeat;
      background-position: center;
      background-size: contain;
      height: 100%;
      width: 25%;
    }

    .logo_gildia {
      background-image: url("https://wombats.s3.eu-central-1.amazonaws.com/gildia_logo.svg");
      background-repeat: no-repeat;
      background-position: center;
      background-size: contain;
      height: 100%;
      width: 25%;
    }
  }

  .wings_table {
    height: auto;
    width: auto;
    margin-top: 2%;
    background: linear-gradient(90deg, rgba(0, 0, 0, 0.0) 0%, rgba(0, 0, 0, 0.3) 20%, rgba(0, 0, 0, 0.3) 50%, rgba(0, 0, 0, 0.3) 80%, rgba(0, 0, 0, 0) 100%);
    .wings_table_header {
      th {
        font-weight: bold;
      }
    }
    .col_1 {
      width: 150px;
    }
    .col_2 {
      width: 250px;
    }
    .col_3 {
      width: 100px;
    }
    .col_4 {
      width: 175px;
    }
    .col_5 {
      width: 125px;
    }
    th {
      font-size: 1.5rem;
      text-align: center;
      height: 2rem;
    }
    .wombats_row {
      color: $wombat_yellow;
    }
  }
}
</style>
