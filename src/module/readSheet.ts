
import Google from "./credential";

class ReadSheet {
    private client: Google;
  constructor(client : Google , private spreadsheetId: string, private range: string) {
    this.client = client;
    this.spreadsheetId = spreadsheetId;
    this.range = range; 

  }
   async read() {
    const auth = this.client.auth();
    const sheets = this.client.google.sheets({ version: "v4", auth });
    const response = await sheets.spreadsheets.values.get({
      spreadsheetId: this.spreadsheetId,
      range: this.range,
    });
    return response.data.values;
} 
}

export default ReadSheet;