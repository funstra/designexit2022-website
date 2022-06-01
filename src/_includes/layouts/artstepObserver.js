const iframe = document.querySelector('#artstep')

const artObs = new IntersectionObserver((entries)=>{
    console.log(entries)
})

artObs.observe(iframe)