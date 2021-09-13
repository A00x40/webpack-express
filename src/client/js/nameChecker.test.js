/**
 * @jest-environment jsdom
 */

import { checkForName } from './nameChecker'


test('Check For Empty Field', () => {
    global.alert = jest.fn()
    expect(checkForName("")).toBe(false)
    expect(global.alert).toHaveBeenCalled()
})
