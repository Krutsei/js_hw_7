// =====1=====

const coffee = document.querySelector("#coffee").value
const tea = document.querySelector("#tea").value
const juice = document.querySelector("#juice").value
const change = document.querySelector("#change")
const spanT1 = document.querySelector("#spanT1")

change.addEventListener("blur", ()=> {
    switch (change.value) {
        case coffee :
            spanP1.textContent = `Ваш напій ${coffee}`
            break
        case tea :
            spanP1.textContent = `Ваш напій ${tea}`
            break
        case juice :
            spanP1.textContent = `Ваш напій ${juice}`
            break    
    }

})

// =====2=====

const inputP2 = document.querySelector("#inputP2")
const btnP2 = document.querySelector("#btnP2")
const spanP2 = document.querySelector("#spanP2")

btnP2.addEventListener("click", ()=> {
    switch (inputP2.value) {
        case "Понеділок":
            spanP2.textContent = "Сьгодні робочий день("
        break
        case "Вівторк":
            spanP2.textContent = "Сьгодні робочий день("
        break
        case "Середа":
            spanP2.textContent = "Сьгодні робочий день("
        break
        case "Четвер":
            spanP2.textContent = "Сьгодні робочий день("
        break
        case "П'ятниця":
            spanP2.textContent = "Сьгодні робочий день("
        break
        case "Субота":
            spanP2.textContent = "Сьгодні вихідний)"
        break
        case "Неділя":
            spanP2.textContent = "Сьгодні вихідний)"
        break

        default:
            spanP2.textContent = "Це не день тижня"
    }

    
})

// =====3=====

const inputP3 = document.querySelector("#inputP3")
const btnP3 = document.querySelector("#btnP3")
const spanP3 = document.querySelector("#spanP3")

btnP3.addEventListener("click", ()=> {

    switch (inputP3.value) {
        case "1" :
        case "2" :
        case "12":
            spanP3.textContent = "Це зима"
        break

        case "3" :
        case "4" :
        case "5" :
            spanP3.textContent = "Це весна"
        break

        case "6" :
        case "7" :
        case "8" :
            spanP3.textContent = "Це літо"
        break

        case "9" :
        case "10":
        case "11":
            spanP3.textContent = "Це осінь"
        break

        default:
            spanP3.textContent = "Неправильний номер місяця"
    }

})

// =====4=====

const inputP4 = document.querySelector("#inputP4")
const btnP4 = document.querySelector("#btnP4")
const spanP4 = document.querySelector("#spanP4")

btnP4.addEventListener("click", ()=> {
    switch (inputP4.value) {
        case "1":
        case "3":
        case "5":
        case "7":
        case "8":
        case "10":
        case "12":
            spanP4.textContent = "В цьому місяці 31 день"
        break

        case "4":
        case "6":
        case "9":
        case "11":
            spanP4.textContent = "В цьому місяці 30 днів"
        break

        case "2":
            spanP4.textContent = "В цьому місяці 28 днів"
        break
    }
})

// =====5=====

const inputP5 = document.querySelector("#inputP5")
const btnP5 = document.querySelector("#btnP5")


btnP5.addEventListener("click", ()=> {
    switch (inputP5.value) {

        case "Червоний":
            alert("Стоп")
        break

        case "Жовтий":
            alert("Чекати")
        break

        case "Зелений":
            alert("Йти")
        break

        default:
            alert("Введіть червоний, жовтий або зелений")
        break
    }
})

// =====6=====

const inputP6Numb1 = document.querySelector("#inputP6-1")
const inputP6Numb2 = document.querySelector("#inputP6-2")
const operator = document.querySelector("#operator")
const plus = document.querySelector("#plus").value
const minus = document.querySelector("#minus").value
const mnog = document.querySelector("#mnog").value
const dil = document.querySelector("#dil").value
const spanP6 = document.querySelector("#spanP6")
const btnP6 = document.querySelector("#btnP6")

btnP6.addEventListener("click", ()=> {

    switch (operator.value) {
        case "+":
            spanP6.textContent =  Number.parseInt(inputP6Numb1.value) + Number.parseInt(inputP6Numb2.value)
            break
        case "-":
            spanP6.textContent =  Number.parseInt(inputP6Numb1.value) - Number.parseInt(inputP6Numb2.value)
            break
        case "*":
            spanP6.textContent =  Number.parseInt(inputP6Numb1.value) * Number.parseInt(inputP6Numb2.value)
            break
        case "/":
            spanP6.textContent =  Number.parseInt(inputP6Numb1.value) / Number.parseInt(inpuPT6Numb2.value)
            break
    }

})