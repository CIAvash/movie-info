import { concatTitleYear, isValid } from '../../helpers/utils';

it('title and year are concatenated correctly', (): void => {
    expect(concatTitleYear('Batman', '1234')).toEqual('Batman (1234)');
})

it('strings are correctly validated', (): void => {
    expect(isValid('Some String')).toBe(true);
    expect(isValid(undefined)).toBe(false);
    expect(isValid('')).toBe(false);
    expect(isValid('N/A')).toBe(false);
})