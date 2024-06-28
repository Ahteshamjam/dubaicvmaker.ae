let v = true
function updateTitle(){
    v = !v
    const title = 'dubaicvmaker.ae'
    document.title = v ? title:'34 new massage'
}
setInterval(updateTitle,1000)