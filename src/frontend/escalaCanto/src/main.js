import './reset.css'
import './style.css'

document.querySelector('#app').innerHTML = `
<div class="flex h-screen">
  <div class="sidebar flex-col w-[400px] h-screen bg-gradient-to-br from-blue-500 to-blue-600 text-white">
    <div class="sidebarTop">
      <img src="" alt="Logo Escala Canto" class="appLogo" />
      <h1>EscalaCanto</h1>
    </div>
    <p>Menu Principal</p>
    <div class="optionsList">
      <div class="item">
        <img src="" alt="house icon" class="icon" />
        <p>Dashboard</p>
      </div>
      <div class="item">
        <img src="" alt="music icon" class="icon" />
        <p>Músicas</p>
      </div>
      <div class="item">
        <img src="" alt="scales icon" class="icon" />
        <p>Escalas</p>
      </div>
      <div class="item">
        <img src="" alt="members icon" class="icon" />
        <p>Membros</p>
      </div>
      <div class="item">
        <img src="" alt="reports icon" class="icon" />
        <p>Relatórios</p>
      </div>
      <div class="item">
        <img src="" alt="history icon" class="icon" />
        <p>Histórico</p>
      </div>
    </div>
  </div>

  <div class="main flex-col w-full h-screen bg-sky-200">
    <div class="mainTitle">
      <img src="" alt="title of main" class="icon" />
    </div>
    <div class="mainTop">
      <h1>Músicas</h1>
      <p>Gerencie o repertório do ministério</p>
      <div class="newSongButton">+ Nova Música</div>
    </div>
    <div class="songsOnMain">
      <div class="searchBar">
        <img src="" alt="search icon" class="icon" />
        <p>Buscar músicas por nome, artista ou tom...</p>
      </div>
      <div class="song">
        <div class="songIcon"><img src="" alt="Music Icon" /></div>
        <div class="songName">
          <p>Reckless Love</p>
          <p>Cory Asbury</p>
        </div>
        <img src="" alt="tone icon" class="icon" />
        <p>C</p>
        <p>72 BPM</p>
        <p class="tag">Adoração</p>
        <p class="tag">Lenta</p>
        <div class="detailsButton"><p>Detalhes</p></div>
      </div>
    </div>
  </div>
</div>
`


