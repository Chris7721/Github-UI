import { elements } from "./base";
import { formatDate } from "../utils";

export const renderRepoTotal = (repoTotal)=>{

    const markUp= `
        <div class="main__right-top-result">
            <span>
                <span class="fw-600">${repoTotal}</span> results for <span class="fw-600">public</span>  repositories
            </span>
        </div>
        `
          elements.repoTotalContainer.insertAdjacentHTML('beforeend', markUp);
}

export const renderTotalNumber = (total)=>{
    elements.totalCount.innerHTML = total
}


export const renderRepo = (repo)=>{

    const markUp= `
    <div class="main__right-bottom-repo">
        <div class="main__right-bottom-repo-name">
            <a href="${repo.url}" target="_blank" rel="noopener noreferrer">
                ${repo.name}
            </a>
            <button class="button"><img src="./images/img/star.png" alt="Forks">Stars</button>
        </div>
        <div class="main__right-bottom-repo-info">
            <div class="main__right-bottom-repo-lang">
                <div class="dot" style="background-color: ${repo.primaryLanguage.color}; border-color: ${repo.primaryLanguage.color}"></div> <span>${repo.primaryLanguage.name}</span>
            </div>
            <div class="main__right-bottom-repo-star">
                <div><img src="./images/img/star.png" alt="Stars"></div><span>${repo.stargazerCount}</span> 
            </div>
            <div class="main__right-bottom-repo-fork">
                <div><img src="./images/img/fork.png" alt="Forks"></div><span>${repo.forkCount}</span>
            </div>

            <div class="main__right-bottom-repo-date">
                <span>Updated on ${formatDate(repo.createdAt).split(',')[0]}</span>
            </div>
        </div>                    
        
    </div>
        `
          elements.repoContainer.insertAdjacentHTML('beforeend', markUp);

}

export const renderDropdownRepo = (repo, index)=>{

    const markUp= `
        <a href="#">
            <div class="active-options-left">
                <span><img src="./images/svg/repository.svg" alt="repo">${repo.nameWithOwner}</span>
            </div>
            <button class="button">Jump to<img src="./images/img/enter.png" alt="Forks"></button>
        </a>
        `
          if(index <= 4) {
              elements.headerInputDropdown.insertAdjacentHTML('beforeend', markUp);
          }

}

