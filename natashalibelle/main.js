let owl = $(".owl-carousel")

function owlStone() {
  owl.owlCarousel({
    nav: true,
    navText: [`<button type="button" role="presentation" class="owl-prev">
                  <i class="svg left colored_theme_hover_text">
                    <svg xmlns="http://www.w3.org/2000/svg" width="12" height="6.969" viewBox="0 0 12 6.969">
                      <path id="Rounded_Rectangle_702_copy_24" data-name="Rounded Rectangle 702 copy 24" class="cls-1" d="M361.691,401.707a1,1,0,0,1-1.414,0L356,397.416l-4.306,4.291a1,1,0,0,1-1.414,0,0.991,0.991,0,0,1,0-1.406l5.016-5a1.006,1.006,0,0,1,1.415,0l4.984,5A0.989,0.989,0,0,1,361.691,401.707Z" transform="translate(-350 -395.031)"></path>
                    </svg>
                  </i>
                </button>`,
                `<button type="button" role="presentation" class="owl-next">
                  <i class="svg right colored_theme_hover_text">
                    <svg xmlns="http://www.w3.org/2000/svg" width="12" height="6.969" viewBox="0 0 12 6.969">
                      <path id="Rounded_Rectangle_702_copy_24" data-name="Rounded Rectangle 702 copy 24" class="cls-1" d="M361.691,401.707a1,1,0,0,1-1.414,0L356,397.416l-4.306,4.291a1,1,0,0,1-1.414,0,0.991,0.991,0,0,1,0-1.406l5.016-5a1.006,1.006,0,0,1,1.415,0l4.984,5A0.989,0.989,0,0,1,361.691,401.707Z" transform="translate(-350 -395.031)"></path>
                    </svg>
                  </i>
                </button>`],
    responsive: {
      0: {
        items: 2
      },
      768: {
        items: 3,
      },
      992: {
        items: 4,
      }
    }
  })
}

$(function() {
  owlStone()
})

const dataSliderId = document.querySelectorAll('[data-slider]')

let sliderId = 0
dataSliderId.forEach(item => {
  item.setAttribute('data-slider-id', sliderId)
  sliderId++
})

const dataStoneList = document.querySelectorAll('.stone-list')
const stonesItemList = []
dataStoneList.forEach(item => {
  stonesItemList.push(item.querySelectorAll('.stone-item'))
})

let categoryList = []
for (let i = 0; i < dataStoneList.length; i++) {
  categoryList.push([])
}

function checkedCategory(evt) {
  let event = evt[0]
  let categoryId = event.getAttribute('data-category-id')
  let dataSliderId = evt.parent().parent().parent().parent().parent().find('[data-slider-id]').attr('data-slider-id')[0]
  
  if (categoryList[dataSliderId].includes(Number(categoryId))) {
    let index = categoryList[dataSliderId].indexOf(Number(categoryId));
    if (index !== -1) categoryList[dataSliderId].splice(index, 1);
  } else if (categoryId === 'all') {
    categoryList[dataSliderId].length = 0
  } else {
    categoryList[dataSliderId].push(Number(categoryId))
  }
}

function updateProductList(dataSliderId, stonesList, stonesItemList) {
  owl.trigger('destroy.owl.carousel')
  stonesList.innerHTML = ''
  let countItem = 0
  
  stonesItemList.forEach(item => {
    let itemProductID = Number(item.getAttribute('data-category-id'))
    if (categoryList[dataSliderId].length === 0) {
      stonesList.appendChild(item)
      countItem += 1
    } else if (categoryList[dataSliderId].includes(itemProductID) === true) {
      stonesList.appendChild(item)
      countItem += 1
    }
  })

  $(function() {
    owlStone()
  })
}

let checkedList = []
for (let i = 0; i < dataStoneList.length; i++) {
  checkedList.push([])
}

$('[data-category-list]').on('click', '[data-click="category"]', function() {
  let dataSliderId = $(this).parent().parent().parent().parent().parent().find('[data-slider-id]').attr('data-slider-id')[0]
  $(this).toggleClass('section-detail-list__item--active')
  $(this).toggleClass('colored_theme_bg')
  $(this).parent().parent().find('[data-category-id="all"]').removeClass('section-detail-list__item--active')
  $(this).parent().parent().find('[data-category-id="all"]').removeClass('colored_theme_bg')
  updateProductList(dataSliderId, dataStoneList[dataSliderId], stonesItemList[dataSliderId])

  let checked = $(this).attr('data-checked')

  if (checked !== 'true') {
    $(this).attr('data-checked', true)
    checkedList[dataSliderId].push(checked)
  } else {
    $(this).attr('data-checked', false)
    checkedList[dataSliderId].pop()
  }

  if (checkedList[dataSliderId].length === 0) {
    $(this).parent().parent().find('[data-checked-all]').attr('data-checked-all', true)
    $(this).parent().parent().find('[data-checked-all]').addClass('section-detail-list__item--active')
    $(this).parent().parent().find('[data-checked-all]').addClass('colored_theme_bg')
  } else {
    $(this).parent().parent().find('[data-checked-all]').attr('data-checked-all', false)
  }
})

$('[data-category-list]').on('click', '[data-click="all"]', function() {
  let checkedAll = $(this).parent().parent().find('[data-checked-all]').attr('data-checked-all')
  if (checkedAll !== 'true') {
    $(this).parent().parent().find('[data-checked]').attr('data-checked', false)
    let dataSliderId = $(this).parent().parent().parent().parent().parent().find('[data-slider-id]').attr('data-slider-id')[0]
    $(this).parent().parent().find('[data-checked-all]').attr('data-checked-all', true)
    $(this).parent().parent().find('[data-click="category"]').removeClass('section-detail-list__item--active')
    $(this).parent().parent().find('[data-click="category"]').removeClass('colored_theme_bg')
    $(this).toggleClass('section-detail-list__item--active')
    $(this).toggleClass('colored_theme_bg')
    updateProductList(dataSliderId, dataStoneList[dataSliderId], stonesItemList[dataSliderId])
    checkedList[dataSliderId] = []
  }
})