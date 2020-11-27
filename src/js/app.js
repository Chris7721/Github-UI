require('../css/app.css');
require('../css/normalize.css');
require('../css/transition.css');
require('../css/loader.css');
import AppModel from "./Models";
import { classExits } from "./utils";
import { renderRepo, renderRepoTotal, renderTotalNumber, renderDropdownRepo } from "./Views";
import { renderLoader, elements, clearLoader, renderRepoLoader, clearRepoLoader } from "./Views/base";
const state= {
    isHeaderDropdownShowing: false,
    dropdownRepos: null
}


const fetchDropdownRepos = async ()=>{
    return new Promise(async (resolve, reject) => {
    try{
        if(!state.dropdownRepos) {
            state.dropdownRepo = new AppModel();
            renderRepoLoader()
            await state.dropdownRepo.fetchRepos()
            state.dropdownRepos = state.dropdownRepo.result
            clearRepoLoader();
            state.dropdownRepo.result.forEach((repo, index)=>{
                renderDropdownRepo(repo, index)
            })
            resolve()
        } else {
            resolve() 
        }
    }
        catch(e){
            alert("something went wrong while fetching data")
            reject()
            // clearLoader();
        }
    })
    }

    const searchDropdownInput =()=>{

    }


const mainController = async ()=>{
    state.repos = new AppModel();
    try{
        Array.from(Array(6)).forEach((x, i) => {
            renderLoader(elements.repoContainer);	
          });
        await state.repos.fetchRepos()
        console.log(state.repos.result)
        clearLoader();
        renderTotalNumber(state.repos.totalCount)
        renderRepoTotal(state.repos.result.length)
        state.repos.result.forEach(repo=>{
            renderRepo(repo)
        })
        }
        catch(e){
            alert("something went wrong while fetching data")
            // clearLoader();
        }
    }

window.onload = function() {
    mainController()
  };


  document.addEventListener('click', function(event) {
    const isInsideInput = elements.headerInput.contains(event.target);
    const isInsideProfile = elements.headerProfile.contains(event.target);
    const isInsideMore = elements.headerMore.contains(event.target);
    const isInsideHeader = elements.headerContainer.contains(event.target);
    if (!isInsideInput && classExits(elements.headerInput, 'active')) {
        elements.headerInput.classList.remove('active')
    }
    else if (!isInsideProfile && classExits(elements.headerProfileDropdown, 'more-display')) {
        elements.headerProfileDropdown.classList.remove('more-display')
    }
    else if (!isInsideMore && classExits(elements.headerMoreDropdown, 'more-display')) {
        elements.headerMoreDropdown.classList.remove('more-display')
    }
    else if (!isInsideHeader && classExits(elements.headerDropdown, 'more-display')) {
        elements.headerDropdown.classList.remove('more-display')
        state.isHeaderDropdownShowing = false;
    }
  });

//   con

function searchClicked(e){
    console.log(state.headerInputClicked)
    elements.headerInput.classList.add('active')
    fetchDropdownRepos()
    // state.headerInputClicked = true
}

function optionClicked(el){
    document.querySelector(`.${el} .dropdown`).classList.add('more-display')
}
function headerMenuClicked(){
    if(!state.isHeaderDropdownShowing) {        
        elements.headerDropdown.classList.add('more-display')
        state.isHeaderDropdownShowing = true;
    } else {
        elements.headerDropdown.classList.remove('more-display')
        state.isHeaderDropdownShowing = false;
    }
}

elements.headerInput.addEventListener('click', ()=> searchClicked())
elements.headerMenu.addEventListener('click', ()=> headerMenuClicked())
elements.headerProfile.addEventListener('click', ()=>optionClicked('header__actions-profile'))
elements.headerMore.addEventListener('click', ()=>optionClicked('header__actions-dropdown'))

document
    .addEventListener('scroll', ()=>{
        if(window.scrollY >= 290){
            document.querySelector('.main__header').classList.add('bg-white')
            document.querySelector('.main__left-profile').classList.add('z-250')
            document.querySelector('.main__header-left').classList.add('opaq')
        }
        else{
            document.querySelector('.main__header').classList.remove('bg-white')
            document.querySelector('.main__left-profile').classList.remove('z-250')
            document.querySelector('.main__header-left').classList.remove('opaq')
        }
    })