import Markdown from 'markdown'
exports.date = (value, format) => {
  if (!value) return
  let date, year, month, day, hours, minutes, seconds, replacer
  replacer = function (reg, result){
    format = format.replace(reg, result)
  }

  date = new Date(value)
  year = date.getFullYear()
  month = date.getMonth() + 1
  day = date.getDate()
  hours = date.getHours()
  minutes = date.getMinutes()
  seconds = date.getSeconds()

  replacer(/yyyy/g, year)
  replacer(/MM/g, month)
  replacer(/dd/g, day)
  replacer(/hh/g, hours)
  replacer(/mm/g, minutes)
  replacer(/ss/g, seconds)
  return format
}


exports.markdown = (value) => {
  if (!value) return
  return Markdown.markdown.toHTML(value)
}
