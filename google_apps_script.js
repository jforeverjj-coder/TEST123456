/**
 * 부산미래유산 아트 프로젝트 - 구글 앱스스크립트 (Google Apps Script)
 * 
 * Target Google Spreadsheet:
 * https://docs.google.com/spreadsheets/d/1souBwO33cN-dr9x5fFj_IdTWnIWuKyaHjib91bYr_UA/edit?gid=0#gid=0
 * 
 * 열 구성 (Column Layout):
 * A열: 이름
 * B열: 연락처
 * C열: 관람일
 * D열: 회차
 * E열: 관람인원
 */

var SPREADSHEET_ID = "1souBwO33cN-dr9x5fFj_IdTWnIWuKyaHjib91bYr_UA";

function doPost(e) {
  try {
    var ss;
    try {
      ss = SpreadsheetApp.openById(SPREADSHEET_ID);
    } catch (err) {
      ss = SpreadsheetApp.getActiveSpreadsheet();
    }
    
    var sheet = ss.getActiveSheet();
    
    // 1. 헤더가 없는 경우 A~E열 자동 생성
    if (sheet.getLastRow() === 0) {
      sheet.appendRow([
        "이름",
        "연락처",
        "관람일",
        "회차",
        "관람인원"
      ]);
      sheet.getRange(1, 1, 1, 5).setFontWeight("bold").setBackground("#e5b95a").setFontColor("#000000");
    }
    
    // 2. 웹사이트에서 수신된 JSON 파싱
    var data = JSON.parse(e.postData.contents);
    
    // 3. A열(이름), B열(연락처), C열(관람일), D열(회차), E열(관람인원) 순서로 데이터 입력
    sheet.appendRow([
      data.visitorName || "",
      data.visitorPhone || "",
      data.reserveDate || "",
      data.reserveTime || "",
      data.ticketCount || 1
    ]);
    
    return ContentService.createTextOutput(JSON.stringify({
      "result": "success",
      "message": "A:이름, B:연락처, C:관람일, D:회차, E:관람인원 정상 입력 완료"
    })).setMimeType(ContentService.MimeType.JSON);
    
  } catch (error) {
    return ContentService.createTextOutput(JSON.stringify({
      "result": "error",
      "message": error.toString()
    })).setMimeType(ContentService.MimeType.JSON);
  }
}

function doGet(e) {
  return ContentService.createTextOutput("A:이름, B:연락처, C:관람일, D:회차, E:관람인원 자동 기입 서비스 정상 가동 중");
}
