let defultCity ='北京'
try {     // 防止用户使用的浏览器没有开启本地存储而导致页面加载失败
  if (localStorage.city){
    defultCity = localStorage.city
  }
}catch (e) {

}

export default {
  city:defultCity
}
