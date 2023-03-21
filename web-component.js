const style = `
<style>

</style>
`

const template = document.createElement('template');
template.innerHTML = `
  <link href="https://unpkg.com/tailwindcss@^2/dist/tailwind.min.css" rel="stylesheet">

  ${style}

  <div>
    <div id="date"></div>
  </div>
`

class datePicker extends HTMLElement {
  constructor() {
    super()

    const shadow = this.attachShadow({ mode: 'open' })
    shadow.append(template.content.cloneNode(true))
    this.dateSpaceEl = shadow.querySelector('#date')
  }

  connectedCallback() {
    console.log('connected')
    this.getDate()
  }

  getDate(...props) {
    console.log(`getDate data`)

    const currentDate = new Date(
      props.length !== 0
      ? props
      : new Date()
    )

    console.log(props)
    console.log(currentDate)

    const dateInfo = {
      date: currentDate,
      firstDay: new Date(
        currentDate.getFullYear(),
        currentDate.getMonth(),
        1
      ).getDay(),
      getMonthText: this.monthText(currentDate.getMonth() + 1),
      lastDays: new Date(
        currentDate.getFullYear(),
        currentDate.getMonth() + 1,
        0
      ).getDate()
    }
    this.paintingMonth(dateInfo, dateInfo.firstDay, dateInfo.getMonthText, dateInfo.lastDays)
    this.nowDate = dateInfo
    return dateInfo
  }

  monthText(month) {
    if (!month) return 'n/a'
    const monthNameAry = [
      'January',
      'February',
      'March',
      'April',
      'May',
      'June',
      'July',
      'August',
      'September',
      'October',
      'November',
      'December',
    ]

    return monthNameAry[month - 1] || 'Error'
  }

  paintingMonth({ date }, firstDay, monthText, days) {
    const dateTemplate = document.createElement('template')
    const daysDiv = (days) => {
      let html = ''
      let blankDay = (num) => {
        let html = ``

        for (let i = 0; i < firstDay; i++) {
          html += `<div class="text-center py-1 border-1"></div>`
        }
        return html
      }
      for (let day = 1; day <= days; day++) {
        const today = new Date()
        const todayBoolean = today.getFullYear() === date.getFullYear()
            && today.getMonth() + 1 === date.getMonth() + 1
            && today.getDate() === day

        html += `
          <div class="text-center py-1 border-1 ${todayBoolean ? 'text-red-200' : ''}">${ todayBoolean ? '今天' : day }</div>
        `
      }

      return html = `${ blankDay(firstDay) + html }`
    }

    dateTemplate.innerHTML = `
      <div class="rounded">
        <!-- 年月 -->
        <div class="flex items-center">
          <button type="button" class="border-1 text-gray-400 px-2 pre"> < </button>
          <div class="flex-1 text-center">
            <span>${ monthText }</span>
            <span>${ date.getFullYear() }</span>
          </div>
          <button type="button" class="border-1 text-gray-400 px-2 py-1 next"> > </button>
        </div>

        <!-- 日期 -->
        <div class="grid grid-cols-7">
          <!-- 星期 -->
          <div class="text-center py-1 border-1">日</div>
          <div class="text-center py-1 border-1">一</div>
          <div class="text-center py-1 border-1">二</div>
          <div class="text-center py-1 border-1">三</div>
          <div class="text-center py-1 border-1">四</div>
          <div class="text-center py-1 border-1">五</div>
          <div class="text-center py-1 border-1">六</div>
          ${ daysDiv(days) }
        </div>
      </div>
    `

    this.dateSpaceEl.innerHTML = `` 
    this.dateSpaceEl.append(dateTemplate.content.cloneNode(true))
    this.shadowRoot.querySelector('button.pre')
        .addEventListener('click', () => this.preDate())
    this.shadowRoot.querySelector('button.next')
        .addEventListener('click', () => this.nextDate())
  }

  preDate() {
    let year = this.nowDate.date.getFullYear()
    let month = this.nowDate.date.getMonth()
    console.log(year, month)
    if (month === 0) {
      year --
      month = 12
    }
    this.getDate(year, month)
  }

  nextDate() {
    let year = this.nowDate.date.getFullYear()
    let month = this.nowDate.date.getMonth() + 2
    if (month === 13) {
      year++
      month = 1
    }
    this.getDate(year, month)
  }
}

customElements.define('date-picker', datePicker)