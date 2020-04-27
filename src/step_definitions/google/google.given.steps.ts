import { Given } from 'cucumber';
import { expect } from 'chai';
import { GoogleHomePage } from '../../pages';

Given('I’m on the homepage', async function goToGoogle() {
    const googleHomePage = new GoogleHomePage();
    await googleHomePage.openGoogleHomePage();
});