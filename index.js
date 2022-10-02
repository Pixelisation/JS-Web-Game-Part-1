function newImage(url, left, bottom){
    let img = document.createElement('img')
    img.src = url
    img.style.position = 'fixed'
    img.style.left = left + 'px'
    img.style.bottom = bottom + 'px'
    document.body.append(img)
    return img
}

function newItem(url, left, bottom) {
    let item = newImage(url, left, bottom)

    item.addEventListener('dblclick', () => {
        item.remove()
    })
}

newImage('assets/Tree.png', 200, 300)
newImage('assets/pillar.png', 350, 100)
newImage('assets/green-character.gif', 100, 100)
newImage('assets/pine-tree.png', 450, 200)
newImage('assets/crate.png', 150, 200)
newImage('assets/well.png', 500, 425)

newItem('assets/sword.png', 500, 405)
newItem('assets/sheild.png', 165, 185)
newItem('assets/staff.png', 600, 100)













