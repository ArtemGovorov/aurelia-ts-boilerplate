import 'aurelia-polyfills';
import {initialize} from 'aurelia-pal-browser';
initialize();

import * as chai from 'chai';
import * as chaiAsPromised from 'chai-as-promised';

chai.use(chaiAsPromised);

export var expect = chai.expect;
