import { google } from 'googleapis';
import Google from './credential';
import ReadSheet from './readSheet';
import { IvenderProductList } from '..';
class GetData {
    constructor(readonly spreadsheetId: string, readonly range: string ,readonly scopes: string[] ,readonly filePath:string ,) {
        this.spreadsheetId = spreadsheetId;
        this.range = range;
        this.scopes = scopes;
        this.filePath = filePath;
    }
    async getData() {
    const credential = new Google(this.filePath, this.scopes,google);
    const readSheet = new ReadSheet(credential, this.spreadsheetId, this.range);
    const data = await readSheet.read();
    console.log('Reading data from Google Sheets...')
    console.log('Data retrieved successfully:');
    let result: IvenderProductList[] = [];
    if (data && data.length > 1) {
        const headers = data[0];
        for (let i = 1; i < data.length; i++) {
            const row = data[i];
            const obj = {} as IvenderProductList;
            headers.forEach((key: string, idx: number) => {
                obj[key as keyof IvenderProductList] = row[idx] || '';
            });
            result.push(obj);
        }
    }
    return result;
    }
    }
export default GetData;