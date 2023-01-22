<template>
  <div class="description">
    <h2 class="description_title app-title main-title">O NAS</h2>
    <div class="description_content">
      <p class="description_text">
        <span class="description_text-bold"
          >Specjalizujemy się w obsłudze informatycznej firm. Oferujemy
          kompleksowe wsparcie: helpdesk, administrację serwerami, zarządzanie
          siecią oraz doradztwo IT.
        </span>
        Firma informatyczna IT Company powstała w 2004 roku w Poznaniu.
        Zatrudniamy serwisantów, administratorów i programistów. Naszymi atutami
        są doświadczenie, zgrany zespół i wypracowane przez lata procedury.
        Dzięki nim możemy dostarczać stabilne rozwiązania dla naszych klientów.
      </p>
      <h2 class="description_title app-title">Doświadczenie</h2>
      <p class="description_text">
        Od 15 lat zdobywamy wiedzę i doświadczenie w dostarczaniu usług IT dla
        średnich i dużych firm w całej Polsce. Dążymy do osiągania celów
        biznesowych, ale bardzo ważne jest dla nas również to, w jaki sposób je
        realizujemy. Stabilne warunki zatrudnienia w oparciu o umowę o pracę
        oraz systematyczne szkolenia pozwalają nam zbudować niezawodny i
        doskonale wykwalifikowany zespół, który jest w stanie sprostać wymogom
        oczekiwanym przez naszych klientów.
      </p>
      <h2 class="description_title app-title">Stosowane technologie:</h2>
      <ul>
        <li v-for="(el, id) in technology" :key="id">
          {{ el }}
        </li>
      </ul>
    </div>
  </div>
</template>

<script lang="ts">
import { Component, Vue } from "vue-property-decorator";
@Component
export default class Description extends Vue {
  public technology = [
    "helpdesk IT - system ticketowy Belisama",
    "administracja serwerami Windows/Linux",
    "zarządzanie usługami Active Directory, File Server, GPO, Print Server, IIS, Failover Clustering, RADIUS",
    "administracja bazami danych (MS SQL, MySQL, PostgreSQL, Oracle)",
    "wirtualizacja serwerów (Hyper-V, VMWare)",
    "administrowanie systemami pocztowymi (Exchange, Postfix)",
    "konfiguracja i zarządzanie backupami (Veem Backup&Replication, Nakivo Backup&Replication)",
    "zarządzanie usługami w chmurze (Azure, AWS)",
  ];
}
</script>
<style lang="scss" scoped>
.description {
  &_title {
  }
  &_content {
    width: 50%;
  }
  &_text {
  }

  &_text-bold {
    font-weight: bold;
  }
}
@media (max-width: 1264px) {
  .description_content {
    width: 100%;
  }
}
</style>
