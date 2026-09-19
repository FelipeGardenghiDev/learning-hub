const inputCheck = document.querySelector('#modo-noturno')
const elemento = document.documentElement

if (inputCheck) {
    inputCheck.addEventListener('click', () => {
        const modo = inputCheck.checked ? 'dark' : 'light'
        elemento.setAttribute("data-bs-theme", modo)
    })
}

const formContato = document.querySelector('#form-contato')
const formSucesso = document.querySelector('#form-sucesso')

const rangeInput = document.querySelector('#nivel-satisfacao')
const rangeOutput = document.querySelector('#output-satisfacao')

if (rangeInput && rangeOutput) {
    rangeInput.addEventListener('input', () => {
        rangeOutput.value = rangeInput.value
        rangeInput.setAttribute('aria-valuenow', rangeInput.value)
    })
}

const camposValidados = [
    {
        input: document.querySelector('#floatingNome'),
        validar: (el) => el.value.trim().length >= 2
    },
    {
        input: document.querySelector('#floatingEmail'),
        validar: (el) => /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(el.value.trim())
    },
    {
        input: document.querySelector('#floatingTelefone'),
        validar: (el) => el.value.trim() === '' || /^[\d\s\(\)\-\+]{8,20}$/.test(el.value.trim())
    }
].filter(({ input }) => input !== null)

// Remove o erro assim que o campo for corrigido
camposValidados.forEach(({ input, validar }) => {
    input.addEventListener('input', () => {
        if (input.classList.contains('is-invalid') && validar(input)) {
            input.classList.remove('is-invalid')
            input.classList.add('is-valid')
        }
    })
})

if (formContato && formSucesso) {
    formContato.addEventListener('submit', (event) => {
        event.preventDefault()

        let valido = true

        camposValidados.forEach(({ input, validar }) => {
            if (!validar(input)) {
                input.classList.add('is-invalid')
                input.classList.remove('is-valid')
                valido = false
            } else {
                input.classList.remove('is-invalid')
            }
        })

        if (!valido) return

        formContato.reset()
        if (rangeOutput) rangeOutput.value = rangeInput.value
        camposValidados.forEach(({ input }) => {
            input.classList.remove('is-valid')
            input.classList.remove('is-invalid')
        })
        formSucesso.classList.remove('d-none')
        formSucesso.scrollIntoView({ behavior: 'smooth', block: 'nearest' })
    })
}