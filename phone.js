// phone load from API ===============>
const loadPhone = async searchText => {
  const res = await fetch(
    `https://openapi.programming-hero.com/api/phones?search=${searchText}`
  );
  const data = await res.json();
  const phone = data.data;
  displayPhone(phone);
};

// phone display====>

const displayPhone = phone => {
  const phoneContainer = document.getElementById('phone-container');
  phoneContainer.textContent = '';

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
        <button class="btn btn-accent bg-[#0D6EFD] text-white ">Show details</button>`;
    phoneContainer.appendChild(div);
  });
};

// search button-==================>

const searchPhone = () => {
  const searchText = document.getElementById('search-input').value;
  // console.log(searchText);
  loadPhone(searchText);
  searchText.value = ' ';
};
// searchPhone();
