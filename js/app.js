let elList = document.querySelector(".country-list")

let elInputSearchName = document.querySelector(".search-name")
let elInputSearchCapital =document.querySelector(".search-capital")
let elSelectRegion =document.querySelector(".select-region")

let SelectOptinList = []

const getData =async (URL)=>{
  const res = await fetch(URL)
  const data = await res.json()
   return data
}

getData("https://restcountries.com/v3.1/all").then(res=>{
  renderCountry(res,elList)
  res.map(item=>{
    if(! SelectOptinList.includes(item.region)){
      SelectOptinList.push(item.region)
    }
  })
  SelectOptinList.map(item=>{
    let elOption = document.createElement("option")
    elOption.textContent =item
    elOption.value =item
    elSelectRegion.appendChild(elOption)
  })
})


function renderCountry(arr,list){
  list.innerHTML=``
  arr.map(item=>{
    let elItem = document.createElement("li")
    elItem.className=" list-item p-2 mt-[20px] rounded-b-[20px] rounded-t-[6px]  text-white h-[440px] w-[280px]"
    elItem.innerHTML=`
    <img class="w-[280px] h-[190px]" src="${item.flags.png}" width="280" height="190"/>
    <div class="p-2 flex flex-col  text-center pt-[20px]">
    <strong class="text-[14px] font-semibold ">Country:
      <span class=" text-emerald-600 text-[18px]"> ${item.altSpellings[1]}</span>
      </strong>
      <strong class="text-[14px] font-semibold ">Capital:
      <span class=" text-emerald-600 text-[18px]">${item.capital}</span>
      </strong>
    <strong class="text-[14px] font-semibold ">Area:
    <span class=" text-emerald-600 text-[18px]"> ${item.area}</span> 
    </strong>
    <strong class="text-[14px] font-semibold ">Population:
    <span class=" text-emerald-600 text-[18px]">  ${item.population}</span> </strong>
    <strong class="text-[14px] font-semibold ">Region:
    <span class=" text-emerald-600 text-[18px]"> ${item.region}</span> </strong>
    </div>
    <button class=" btn-more  py-[5px] px-[20px] text-center  w-[90px] rounded-[10px] text-[18px] text-black bg-cyan-300 " >More</button>
    `
    list.appendChild(elItem)  // list.appendChild(elItem)
  })
}
elInputSearchName.addEventListener("keyup",function(evt){
  let value = evt.target.value
  if(value){
    getData(`https://restcountries.com/v3.1/name/${value}`).then(res=>{
      renderCountry(res,elList)
    })
  }
  else{
    getData(`https://restcountries.com/v3.1/all`).then(res=>{
      renderCountry(res,elList)
    })
  }
})

elInputSearchCapital.addEventListener("keyup",function(evt){
  let value = evt.target.value
  if(value){
    getData(`https://restcountries.com/v3.1/capital/${value}`).then(res=>{
      renderCountry(res,elList)
    })
  }
  else{
    getData(`https://restcountries.com/v3.1/all`).then(res=>{
      renderCountry(res,elList)
    })
  }
})

elSelectRegion.addEventListener("change", function(evt){
  let value =evt.target.value
  if(! value){
    getData(`https://restcountries.com/v3.1/region/${value}`).then(res=>{
      renderCountry(res,elList)

  })
  }
  else{
    getData("https://restcountries.com/v3.1/all").then(res=>{
      renderCountry(res.elList)
    })
  }

})
