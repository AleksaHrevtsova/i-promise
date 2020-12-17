// https://app.slack.com/client/T01B1SKA66Q/C01AVLXMDHQ
//   HTTP || HTTP+S(SECURE)
// TCP ==== ==== ==== IP

// REST API
// РЕЛЯЦИОННЫЕ ДАННЫЕ
// |  1 |  2      |  3  |   4    |
// |NAME|LAST NAME|EMAIL|PASSWORD|
// |    |

// НЕ РЕЛЯЦИОННЫЕ
// [
//   {
//     "name": "",
//     "last_name": "",
//     "email": "",
//     "password": "",
//   },
//   {
//     "name": "",
//     "last_name": "",
//   },
// ];

// === CORS ===

// by Browser

// POST HTTP/1.1
// Origin: https://domain.com
// Host: domain.com

// response by DB
// Access-Control-Allow-Origin: *
// Access-Control-Allow-Origin: https://domain.com

// fetch methods

//    C     R       U           D
// CREATE READ   UPDATE       DELETE

//  POST  GET  PUT || PATCH   DELETE
