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

  <div class="main flex-col w-full h-screen bg-neutral-200 text-black">
    <div class="header flex w-full h-[80px] border-b-[3px] border-neutral-300 bg-neutral-200 items-center pl-[40px]">
      <img src="/assets/panel-left.svg" alt="title of main" class="icon h-[25px]" />
    </div>
    <div class="mainTop flex w-full h-30 p-7 items-center justify-between">
      <div class="flex flex-col gap-2">
        <h1 class="text-4xl font-bold text-purple-600" >Músicas</h1>
        <p class="text-neutral-500">Gerencie o repertório do ministério</p>
      </div>
      <div class="newSongButton flex flex-row items-center justify-between bg-gradient-to-br from-purple-500 to-blue-500 w-37 h-10 rounded-lg px-3">
        <img src="/assets/plus.svg" alt="plus icon" class="">
        <p>Nova Música</p>
      </div>
    </div>

      <div class="songsOnMain flex flex-col bg-neutral-100 mx-7 rounded-lg">
        <div class="searchBar flex h-10 m-5 bg-neutral-100 text-neutral-500 rounded-lg items-center gap-3 px-3">
          <img src="/assets/search.svg" alt="search icon" class="icon" />
          <p>Buscar músicas por nome, artista ou tom...</p>
        </div>


        <div class="flex flex-col">
        <div class="song flex h-20 mx-5 mt-2 bg-neutral-50 text-neutral-500 rounded-lg items-center px-3 justify-between border-1 border-neutral-300">
        <div class="flex flex-row items-center gap-3">
          <div class="songIcon flex bg-gradient-to-br from-purple-500 to-blue-500 h-13 w-13 justify-center items-center rounded-lg"><img src="/assets/music.svg" alt="Music Icon" class="h-8"/></div>
          <div class="songName flex flex-col gap-2">
            <p class="font-bold text-black">Reckless Love</p>
            <p>Juninho Afram</p>
          </div>
        </div>
        <div class="flex flex-row gap-2 items-center">
          <img src="/assets/guitar.svg" alt="guitar tone icon" class="icon" />
          <p class="font-medium text-black pr-5">G</p>
          <p class="pr-5">110 BPM</p>
          <div class="flex bg-violet-100 text-purple-800 w-21 h-7 items-center justify-center rounded-2xl font-semibold"><p class="tag">Pesada</p></div>
          <div class="flex bg-violet-100 text-purple-800 w-21 h-7 items-center justify-center rounded-2xl font-semibold mr-5"><p class="tag">Solo</p></div>
          <div class="detailsButton flex h-10 w-23 items-center justify-center rounded-lg bg-neutral-100 border-2 border-neutral-300"><p class="text-black font-semibold">Detalhes</p></div>
        </div>
        </div>
        <div class="song flex h-20 m-5 bg-neutral-50 text-neutral-500 rounded-lg items-center gap-3 px-3 justify-between border-1 border-neutral-300">
        <div class="flex flex-row items-center gap-3">
          <div class="songIcon flex bg-gradient-to-br from-purple-500 to-blue-500 h-13 w-13 justify-center items-center rounded-lg"><img src="/assets/music.svg" alt="Music Icon" class="h-8"/></div>
          <div class="songName flex flex-col gap-2">
            <p class="font-bold text-black">Não Há Amor Igual</p>
            <p>Morada</p>
          </div>
        </div>
        <div class="flex flex-row gap-2 items-center">
          <img src="/assets/guitar.svg" alt="guitar tone icon" class="icon" />
          <p class="font-medium text-black pr-5">B</p>
          <p class="pr-5">70 BPM</p>
          <div class="flex bg-violet-100 text-purple-800 w-21 h-7 items-center justify-center rounded-2xl font-semibold"><p class="tag">Adoração</p></div>
          <div class="flex bg-violet-100 text-purple-800 w-21 h-7 items-center justify-center rounded-2xl font-semibold mr-5"><p class="tag">Animada</p></div>
          <div class="detailsButton flex h-10 w-23 items-center justify-center rounded-lg bg-neutral-100 border-2 border-neutral-300"><p class="text-black font-semibold">Detalhes</p></div>
        </div>
        </div>
        <div class="flex flex-col">
        <div class="song flex h-20 mx-5 mt-2 bg-neutral-50 text-neutral-500 rounded-lg items-center px-3 justify-between border-1 border-neutral-300">
        <div class="flex flex-row items-center gap-3">
          <div class="songIcon flex bg-gradient-to-br from-purple-500 to-blue-500 h-13 w-13 justify-center items-center rounded-lg"><img src="/assets/music.svg" alt="Music Icon" class="h-8"/></div>
          <div class="songName flex flex-col gap-2">
            <p class="font-bold text-black">Os Anjos Te Louvam</p>
            <p>Eli Soares</p>
          </div>
        </div>
        <div class="flex flex-row gap-2 items-center">
          <img src="/assets/guitar.svg" alt="guitar tone icon" class="icon" />
          <p class="font-medium text-black pr-5">Bm</p>
          <p class="pr-5">110 BPM</p>
          <div class="flex bg-violet-100 text-purple-800 w-21 h-7 items-center justify-center rounded-2xl font-semibold"><p class="tag">Groove</p></div>
          <div class="flex bg-violet-100 text-purple-800 w-21 h-7 items-center justify-center rounded-2xl font-semibold mr-5"><p class="tag">Animada</p></div>
          <div class="detailsButton flex h-10 w-23 items-center justify-center rounded-lg bg-neutral-100 border-2 border-neutral-300"><p class="text-black font-semibold">Detalhes</p></div>
        </div>
        </div>
        <div class="song flex h-20 m-5 bg-neutral-50 text-neutral-500 rounded-lg items-center gap-3 px-3 justify-between border-1 border-neutral-300">
        <div class="flex flex-row items-center gap-3">
          <div class="songIcon flex bg-gradient-to-br from-purple-500 to-blue-500 h-13 w-13 justify-center items-center rounded-lg"><img src="/assets/music.svg" alt="Music Icon" class="h-8"/></div>
          <div class="songName flex flex-col gap-2">
            <p class="font-bold text-black">Hosanna</p>
            <p>Hillsong UNITED</p>
          </div>
        </div>
        <div class="flex flex-row gap-2 items-center">
          <img src="/assets/guitar.svg" alt="guitar tone icon" class="icon" />
          <p class="font-medium text-black pr-5">E</p>
          <p class="pr-5">77 BPM</p>
          <div class="flex bg-violet-100 text-purple-800 w-21 h-7 items-center justify-center rounded-2xl font-semibold"><p class="tag">Pop Rock</p></div>
          <div class="flex bg-violet-100 text-purple-800 w-21 h-7 items-center justify-center rounded-2xl font-semibold mr-5"><p class="tag">Worship</p></div>
          <div class="detailsButton flex h-10 w-23 items-center justify-center rounded-lg bg-neutral-100 border-2 border-neutral-300"><p class="text-black font-semibold">Detalhes</p></div>
        </div>
        </div>

      </div>

  </div>
</div>
`


