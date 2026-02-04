import './reset.css'
import './style.css'

document.querySelector('#app').innerHTML = `
<div class="flex h-screen">
  <div class="sidebar flex-col w-[400px] h-screen bg-gradient-to-br from-purple-500 to-blue-500 text-white">
    <div class="sidebarTop flex w-full h-[80px] justify-start items-center gap-[6px] pl-[10px] border-b-[3px] border-purple-600">
      <img src="/assets/music.svg" alt="Logo Escala Canto" class="appLogo flex h-[45px] w-[45px] text-red-50" />
      <p class="font-bold text-2xl">EscalaCanto</p>
    </div>
    <p class="flex mt-[20px] mb-[20px] text-md font-semibold ml-[10px]">Menu Principal</p>
    <div class="flex flex-col pt-[5px] items-center">
      <div class="optionsList w-2xs">
        <div class="item flex flex-row items-center gap-[15px] w-full h-[35px] mb-[10px]">
          <img src="/assets/house.svg" alt="house icon" class="icon h-[25px] w-[25px]" />
          <p class="text-lg">Dashboard</p>
        </div>
        <div class="item flex flex-row items-center gap-[15px] w-full h-[35px] mb-[10px] outline-2 outline-offset-2 outline-purple-300 rounded-xl bg-violet-700">
          <img src="/assets/music.svg" alt="music icon" class="icon h-[25px] w-[25px]" />
          <p class="text-lg font-bold">Músicas</p>
        </div>
        <div class="item flex flex-row items-center gap-[15px] w-full h-[35px] mb-[10px]">
          <img src="/assets/calendar.svg" alt="calendar icon" class="icon h-[25px] w-[25px]" />
          <p class="text-lg">Escalas</p>
        </div>
        <div class="item flex flex-row items-center gap-[15px] w-full h-[35px] mb-[10px]">
          <img src="/assets/users.svg" alt="users icon" class="icon h-[25px] w-[25px]" />
          <p class="text-lg">Integrantes</p>
        </div>
        <div class="item flex flex-row items-center gap-[15px] w-full h-[35px] mb-[10px]">
          <img src="/assets/chart-column.svg" alt="graphic icon" class="icon h-[25px] w-[25px]" />
          <p class="text-lg">Relatórios</p>
        </div>
        <div class="item flex flex-row items-center gap-[15px] w-full h-[35px] mb-[10px]">
          <img src="/assets/history.svg" alt="historic icon" class="icon h-[25px] w-[25px]" />
          <p class="text-lg">Histórico</p>
        </div>
      </div>
    </div>
  </div>

  <div class="main flex-col w-full h-screen bg-neutral-50">
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


