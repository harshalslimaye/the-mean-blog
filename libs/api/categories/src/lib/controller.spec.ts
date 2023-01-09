import { dbConnect, dbDisconnect } from '@the-mean-blog/api/testing';

describe('categoryController', () => {
  beforeEach(async () => dbConnect());

  afterEach(async () => dbDisconnect());

  it('should test', () => {
    expect(true).toBeTruthy();
  })
})
