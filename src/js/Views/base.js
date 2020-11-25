export const elements = {
	repoContainer: document.querySelector('.main__right-bottom'),
	repoTotalContainer: document.querySelector('.main__right-top'),
	totalCount: document.querySelector('.totalCount'),
	headerInput: document.querySelector('.header__logo-input'),
	headerProfile: document.querySelector('.header__actions-profile'),
	headerProfileDropdown: document.querySelector('.header__actions-profile .dropdown'),
	headerMore: document.querySelector('.header__actions-dropdown'),
	headerMoreDropdown: document.querySelector('.header__actions-dropdown .dropdown'),
	headerMenu: document.querySelector('.header__menu'),
	headerDropdown: document.querySelector('.header__mobile'),
	headerContainer: document.querySelector('.header__container')
};

export const renderLoader = (parent)=>{
	const loader = `	
	<div class="main__right-bottom-repo loader">
		<div class="repo-loader-top">
			<div class="repo-loader-top-left"></div>
			<div class="repo-loader-top-right"></div>
		</div>
		<div class="repo-loader-bottom">
			<div class="repo-loader-bottom-left"></div>
		</div>
	</div>`
	parent.insertAdjacentHTML('afterbegin', loader);
}

export const clearLoader = ()=>{
    const loaders = document.querySelectorAll('.main__right-bottom-repo.loader');
	console.log(loaders)
	elements.repoContainer.innerHTML=""
	// loader.parentElement.removeChild(loader);
}