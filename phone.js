// phone load from API ===============>
const loadPhone = async (searchText, isShowAll) => {
  const res = await fetch(
    `https://openapi.programming-hero.com/api/phones?search=${searchText}`
  );
  const data = await res.json();
  const phone = data.data;
  displayPhone(phone, isShowAll);
};

// phone display====>

const displayPhone = (phone, isShowAll) => {
  const phoneContainer = document.getElementById('phone-container');
  phoneContainer.textContent = '';
  const showAll = document.getElementById('show-all');
  if (phone.length > 12 && !isShowAll) {
    showAll.classList.remove('hidden');
  } else {
    showAll.classList.add('hidden');
  }
  if (!isShowAll) {
    phone = phone.slice(0, 12);
  }

  phone.forEach(phone => {
    console.log(phone);
    const div = document.createElement('div');
    div.classList = `p-4 border-slate-200 rounded-lg flex flex-col justify-center items-center border-2 mt-6 space-y-4`;
    div.innerHTML = `<div class="bg-[#0D6EFD0D] items-center rounded-lg">
          <img src="${phone.image}" alt="">
        </div>
        <h3 class="font-bold text-2xl text-center">${phone.phone_name}</h3>
        <p class="text-[18px] font-normal text-center">There are many variations of passages of available, but the
          majority have suffered</p>
        <span class="font-bold text-2xl">$999</span>
        <button onclick="handleShowDetail('${phone.slug}')" class="btn btn-accent bg-[#0D6EFD] text-white ">Show details</button>`;
    phoneContainer.appendChild(div);
  });
  toggleSpinner(false);
};

// search button-==================>

const searchPhone = isShowAll => {
  toggleSpinner(true);
  const searchText = document.getElementById('search-input').value;
  // console.log(searchText);
  loadPhone(searchText, isShowAll);
};

const toggleSpinner = isLoading => {
  const spinner = document.getElementById('spinner');
  if (isLoading) {
    spinner.classList.remove('hidden');
  } else {
    spinner.classList.add('hidden');
  }
};
const showAllBtn = () => {
  // console.log('got it');
  searchPhone(true);
  document.getElementById('search-input').value = ' ';
};

const handleShowDetail = async id => {
  const res = await fetch(
    `https://openapi.programming-hero.com/api/phone/${id}`
  );
  const data = await res.json();
  const phone = data.data;
  console.log(phone);
  showDetails(phone);
};
// const my_modal_5.showModal
const showDetails = phone => {
  const modal = document.getElementById('detail-container');
  modal.innerHTML = `<div class="bg-[#0D6EFD0D] items-center rounded-lg flex justify-center">
          <img src="${phone.image}" alt="">
        </div>
        <h3 class="font-bold text-lg">${phone.name}</h3>
        <p class="py-4">It is a long established fact that a reader will be distracted by the readable content of a page
          when looking at its
          layout.</p>
        <p><span class="font-bold text-lg">Storage:</span>${
          phone.mainFeatures.storage
        }</p>
        <p><span class="font-bold text-lg">Display Size:</span>${
          phone.mainFeatures.displaySize
        }</p>
        <p><span class="font-bold text-lg">Chipset:</span>${
          phone.mainFeatures.chipSet
        }</p>
        <p><span class="font-bold text-lg">Memory:</span>${
          phone.mainFeatures.memory
        }</p>
        <p><span class="font-bold text-lg">Slug:</span>${phone.slug}</p>
        <p><span class="font-bold text-lg">Release Date:</span>${
          phone?.releaseDate || 'Release date not available'
        }</p>

        <div class="modal-action ">
          <form method="dialog">
            <!-- if there is a button in form, it will close the modal -->
            <button class="btn bg-[#DC3545] px-8 text-white">Close</button>
          </form>
        </div>`;
  show_details_modal.showModal();
};
