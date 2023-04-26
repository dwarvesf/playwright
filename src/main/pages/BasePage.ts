import * as CodeceptJS from "codeceptjs";
import Configuration from "../resources/configuration";
import { assert, expect } from 'chai';
const { I } = inject();
const tryTo = codeceptjs.container.plugins('tryTo');
let resultArray = new Array();

const configuration = new Configuration();
const timeout = configuration.timeout;

export default class BasePage {
    private url: string;

    constructor(url) {
        this.url = url;
    }

    protected open() : void {
        I.amOnPage(this.url);
    }

    protected waitForOpened() : void {
        I.waitInUrl(this.url);
    }

    protected click(locator) : void {
        I.waitForElement(locator, timeout.element);
        I.click(locator);
    }

    protected selectOption(locator, text) : void {
        I.waitForElement(locator, timeout.element);
        I.selectOption(locator, text);
    }
    
    protected fillField(locator, text) : void {
        I.waitForElement(locator, timeout.element);
        I.click(locator);
        I.clearAndFillField(locator, text);
    }

    protected convertDecimalCurrencies(value: string): string {
        const decimalValue = parseFloat(value)
        return (decimalValue / 100).toFixed(2)
    }

    protected async softAssert(functionName: () => void) {
        const result = await tryTo(() => {
            functionName()
        })
        resultArray.push(result)
        return result
    }
}