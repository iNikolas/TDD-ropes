import React from 'react'
import Counter from "../Counter"
import { render, fireEvent } from "@testing-library/react"
import '@testing-library/jest-dom/extend-expect'

let headerEL, counterEl, inputEl, subtractBtn, addBtn

beforeEach(() => {
    const { getByTestId } = render(<Counter/>)
    headerEL = getByTestId('header')
    counterEl = getByTestId('counter')
    inputEl = getByTestId('input')
    subtractBtn = getByTestId('subtract-btn')
    addBtn = getByTestId('add-btn')
})


test('header renders with correct text', () => {
    expect(headerEL.textContent).toBe('My counter')
})

test('counter initially starts with text of 0', () => {
       expect(counterEl.textContent).toBe('0')
})

test('input contains initial value of 1', () => {
    expect(inputEl.value).toBe('1')
})

test('add button renders with +', () =>{
    expect(addBtn.textContent).toBe('+')
})

test('subtract button renders with -', () =>{
    expect(subtractBtn.textContent).toBe('-')
})

test('changing value of input works correctly', () => {
    expect(inputEl.value).toBe('1')

    fireEvent.change(inputEl, {
        target: {
            value: '5'
        }
    })

    expect(inputEl.value).toBe('5')
})

test('click on plus btn ads 1 to initial counter', () => {
    expect(counterEl.textContent).toBe('0')

    fireEvent.click(addBtn)

    expect(counterEl.textContent).toBe('1')
})

test('click on plus btn increases counter correctly', () => {

    expect(counterEl.textContent).toBe('0')

    fireEvent.change(inputEl, {
        target: {
            value: '5'
        }
    })

    fireEvent.click(addBtn)

    expect(counterEl.textContent).toBe('5')

    fireEvent.change(inputEl, {
        target: {
            value: '16'
        }
    })

    fireEvent.click(addBtn)

    expect(counterEl.textContent).toBe('21')
})

test('click on subtract btn subtract 1 from initial counter', () => {

    expect(counterEl.textContent).toBe('0')

    fireEvent.click(subtractBtn)

    expect(counterEl.textContent).toBe('-1')
})

test('click on subtract btn subtract counter correctly', () => {

    expect(counterEl.textContent).toBe('0')

    fireEvent.change(inputEl, {
        target: {
            value: '3'
        }
    })

    fireEvent.click(subtractBtn)

    expect(counterEl.textContent).toBe('-3')

    fireEvent.change(inputEl, {
        target: {
            value: '18'
        }
    })

    fireEvent.click(subtractBtn)

    expect(counterEl.textContent).toBe('-21')
})

test('counter contains correct class name, testing subtraction', () => {

    expect(counterEl.className).toBe('')

    fireEvent.change(inputEl, {
        target: {
            value: '100'
        }
    })

    fireEvent.click(subtractBtn)

    expect(counterEl.className).toBe('red')

})

test('counter contains correct class name, testing addition', () => {

    expect(counterEl.className).toBe('')

    fireEvent.change(inputEl, {
        target: {
            value: '100'
        }
    })

    fireEvent.click(addBtn)

    expect(counterEl.className).toBe('green')

})