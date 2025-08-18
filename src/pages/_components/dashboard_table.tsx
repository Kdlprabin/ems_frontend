import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "../../components/ui/table"

const dashboard_data = [
  {
    "Branch": "BHATEDADA BRANCH",
    "Category": "Member",
    "PreviousYears": 1196,
    "TargetThisFY": { "1stQtr": 1219, "2ndQtr": 1258, "3rdQtr": 1312, "4thQtr": 1350, "Total": 154 },
    "Staff": 3
  },
  {
    "Branch": "BHATEDADA BRANCH",
    "Category": "Loanee",
    "PreviousYears": 574,
    "TargetThisFY": { "1stQtr": 610, "2ndQtr": 654, "3rdQtr": 695, "4thQtr": 720, "Total": 146 },
    "Staff": 3
  },
  {
    "Branch": "BHATEDADA BRANCH",
    "Category": "Outstanding Loan",
    "PreviousYears": 102237,
    "TargetThisFY": { "1stQtr": 110938, "2ndQtr": 120981, "3rdQtr": 132068, "4thQtr": 140646, "Total": 38409 },
    "Staff": 3
  },
  {
    "Branch": "BHATEDADA BRANCH",
    "Category": "Saving",
    "PreviousYears": 30347,
    "TargetThisFY": { "1stQtr": 36610, "2ndQtr": 42343, "3rdQtr": 49526, "4thQtr": 56258, "Total": 25911 },
    "Staff": 3
  },
  {
    "Branch": "BHATEDADA BRANCH",
    "Category": "P/L",
    "PreviousYears": 1572667,
    "TargetThisFY": { "1stQtr": 824486, "2ndQtr": 990041, "3rdQtr": 1223245, "4thQtr": 1353364, "Total": 4391136 },
    "Staff": 3
  },
  {
    "Branch": "BHATEDADA BRANCH",
    "Category": "Risk",
    "PreviousYears": 17601,
    "TargetThisFY": { "1stQtr": 16058, "2ndQtr": 14128, "3rdQtr": 11426, "4thQtr": 9883, "Total": -7718 },
    "Staff": 3
  },
  {
    "Branch": "BHATEDADA BRANCH",
    "Category": "NPL",
    "PreviousYears": 7132,
    "TargetThisFY": { "1stQtr": 6622, "2ndQtr": 5984, "3rdQtr": 5092, "4thQtr": 4582, "Total": -2550 },
    "Staff": 3
  },
  {
    "Branch": "BHATEDADA BRANCH",
    "Category": "Watchlist",
    "PreviousYears": 1306,
    "TargetThisFY": { "1stQtr": 1305, "2ndQtr": 1303, "3rdQtr": 1301, "4thQtr": 1300, "Total": -6 },
    "Staff": 3
  },
  {
    "Branch": "BHATEDADA BRANCH",
    "Category": "Int Due",
    "PreviousYears": 1950,
    "TargetThisFY": { "1stQtr": 1868, "2ndQtr": 1730, "3rdQtr": 1538, "4thQtr": 1400, "Total": -550 },
    "Staff": 3
  },
  {
    "Branch": "BHATEDADA BRANCH",
    "Category": "Restructu..",
    "PreviousYears": 7315,
    "TargetThisFY": { "1stQtr": 7010, "2ndQtr": 6310, "3rdQtr": 5310, "4thQtr": 4365, "Total": -2950 },
    "Staff": 3
  },
  {
    "Branch": "Chhahare Branch",
    "Category": "Member",
    "PreviousYears": 364,
    "TargetThisFY": { "1stQtr": 414, "2ndQtr": 498, "3rdQtr": 616, "4thQtr": 700, "Total": 336 },
    "Staff": 2
  },
  {
    "Branch": "Chhahare Branch",
    "Category": "Loanee",
    "PreviousYears": 180,
    "TargetThisFY": { "1stQtr": 207, "2ndQtr": 249, "3rdQtr": 308, "4thQtr": 400, "Total": 220 },
    "Staff": 2
  },
  {
    "Branch": "Chhahare Branch",
    "Category": "Outstanding Loan",
    "PreviousYears": 47549,
    "TargetThisFY": { "1stQtr": 56980, "2ndQtr": 68032, "3rdQtr": 78540, "4thQtr": 90000, "Total": 42451 },
    "Staff": 2
  },
  {
    "Branch": "Chhahare Branch",
    "Category": "Saving",
    "PreviousYears": 5952,
    "TargetThisFY": { "1stQtr": 8547, "2ndQtr": 12246, "3rdQtr": 16493, "4thQtr": 19800, "Total": 13848 },
    "Staff": 2
  },
  {
    "Branch": "Chhahare Branch",
    "Category": "P/L",
    "PreviousYears": 49511,
    "TargetThisFY": { "1stQtr": 134518, "2ndQtr": 257617, "3rdQtr": 422022, "4thQtr": 561336, "Total": 1375493 },
    "Staff": 2
  },
  {
    "Branch": "Chhahare Branch",
    "Category": "Risk",
    "PreviousYears": 4356,
    "TargetThisFY": { "1stQtr": 3840, "2ndQtr": 3194, "3rdQtr": 2290, "4thQtr": 1774, "Total": -2582 },
    "Staff": 2
  },
  {
    "Branch": "Chhahare Branch",
    "Category": "NPL",
    "PreviousYears": 998,
    "TargetThisFY": { "1stQtr": 975, "2ndQtr": 945, "3rdQtr": 904, "4thQtr": 881, "Total": -117 },
    "Staff": 2
  },
  {
    "Branch": "Chhahare Branch",
    "Category": "Watchlist",
    "PreviousYears": 1856,
    "TargetThisFY": { "1stQtr": 1648, "2ndQtr": 1387, "3rdQtr": 1021, "4thQtr": 812, "Total": -1044 },
    "Staff": 2
  },
  {
    "Branch": "Chhahare Branch",
    "Category": "Int Due",
    "PreviousYears": 394,
    "TargetThisFY": { "1stQtr": 387, "2ndQtr": 376, "3rdQtr": 361, "4thQtr": 350, "Total": -44 },
    "Staff": 2
  },
  {
    "Branch": "Chhahare Branch",
    "Category": "Restructu..",
    "PreviousYears": 0,
    "TargetThisFY": { "1stQtr": 0, "2ndQtr": 0, "3rdQtr": 0, "4thQtr": 0, "Total": 0 },
    "Staff": 2
  },
  {
    "Branch": "DHADING BESHI DHADING",
    "Category": "Member",
    "PreviousYears": 1810,
    "TargetThisFY": { "1stQtr": 1824, "2ndQtr": 1846, "3rdQtr": 1878, "4thQtr": 1900, "Total": 90 },
    "PerStaff": { "1stQtr": 14, "2ndQtr": 22, "3rdQtr": 32, "4thQtr": 22, "Total": 90 },
    "Staff": 3
  },
  {
    "Branch": "DHADING BESHI DHADING",
    "Category": "Loanee",
    "PreviousYears": 693,
    "TargetThisFY": { "1stQtr": 729, "2ndQtr": 775, "3rdQtr": 807, "4thQtr": 880, "Total": 187 },
    "PerStaff": { "1stQtr": 36, "2ndQtr": 46, "3rdQtr": 32, "4thQtr": 73, "Total": 187 },
    "Staff": 3
  },
  {
    "Branch": "DHADING BESHI DHADING",
    "Category": "Outstanding Loan",
    "PreviousYears": 155086,
    "TargetThisFY": { "1stQtr": 164115, "2ndQtr": 172896, "3rdQtr": 180841, "4thQtr": 190000, "Total": 34914 },
    "PerStaff": { "1stQtr": 9029, "2ndQtr": 8781, "3rdQtr": 7945, "4thQtr": 9159, "Total": 34914 },
    "Staff": 3
  },
  {
    "Branch": "DHADING BESHI DHADING",
    "Category": "Saving",
    "PreviousYears": 37040,
    "TargetThisFY": { "1stQtr": 426670, "2ndQtr": 48411, "3rdQtr": 54252, "4thQtr": 62700, "Total": 25660 },
    "PerStaff": { "1stQtr": 389630, "2ndQtr": -378259, "3rdQtr": 5841, "4thQtr": 8448, "Total": 25660 },
    "Staff": 3
  },
  {
    "Branch": "DHADING BESHI DHADING",
    "Category": "P/L",
    "PreviousYears": 506190,
    "TargetThisFY": { "1stQtr": 900119, "2ndQtr": 1092211, "3rdQtr": 1346875, "4thQtr": 1481769, "Total": 4820974 },
    "PerStaff": { "1stQtr": 900119, "2ndQtr": 1092211, "3rdQtr": 1346875, "4thQtr": 1481769, "Total": 4820974 },
    "Staff": 3
  },
  {
    "Branch": "DHADING BESHI DHADING",
    "Category": "Risk",
    "PreviousYears": 55118,
    "TargetThisFY": { "1stQtr": 49228, "2ndQtr": 41866, "3rdQtr": 31559, "4thQtr": 25669, "Total": -29449 },
    "PerStaff": { "1stQtr": -5890, "2ndQtr": -7362, "3rdQtr": -10307, "4thQtr": -5890, "Total": -29449 },
    "Staff": 3
  },
  {
    "Branch": "DHADING BESHI DHADING",
    "Category": "NPL",
    "PreviousYears": 12913,
    "TargetThisFY": { "1stQtr": 11261, "2ndQtr": 9196, "3rdQtr": 6304, "4thQtr": 4652, "Total": -8261 },
    "PerStaff": { "1stQtr": -1652, "2ndQtr": -2065, "3rdQtr": -2892, "4thQtr": -1652, "Total": -8261 },
    "Staff": 3
  },
  {
    "Branch": "DHADING BESHI DHADING",
    "Category": "Watchlist",
    "PreviousYears": 15023,
    "TargetThisFY": { "1stQtr": 13824, "2ndQtr": 12326, "3rdQtr": 10229, "4thQtr": 9030, "Total": -5993 },
    "PerStaff": { "1stQtr": -1199, "2ndQtr": -1498, "3rdQtr": -2097, "4thQtr": -1199, "Total": -5993 },
    "Staff": 3
  },
  {
    "Branch": "DHADING BESHI DHADING",
    "Category": "Int Due",
    "PreviousYears": 5349,
    "TargetThisFY": { "1stQtr": 5153, "2ndQtr": 4826, "3rdQtr": 4367, "4thQtr": 4040, "Total": -1309 },
    "PerStaff": { "1stQtr": -196, "2ndQtr": -327, "3rdQtr": -459, "4thQtr": -327, "Total": -1309 },
    "Staff": 3
  },
  {
    "Branch": "DHADING BESHI DHADING",
    "Category": "Restructu..",
    "PreviousYears": 0,
    "TargetThisFY": { "1stQtr": 0, "2ndQtr": 0, "3rdQtr": 0, "4thQtr": 0, "Total": 0 },
    "PerStaff": { "1stQtr": 0, "2ndQtr": 0, "3rdQtr": 0, "4thQtr": 0, "Total": 0 },
    "Staff": 3
  },
  {
    "Branch": "Dharke Branch",
    "Category": "Member",
    "PreviousYears": 859,
    "TargetThisFY": { "1stQtr": 888, "2ndQtr": 935, "3rdQtr": 1002, "4thQtr": 1050, "Total": 191 },
    "PerStaff": { "1stQtr": 29, "2ndQtr": 47, "3rdQtr": 67, "4thQtr": 48, "Total": 191 },
    "Staff": 3
  },
  {
    "Branch": "Dharke Branch",
    "Category": "Loanee",
    "PreviousYears": 497,
    "TargetThisFY": { "1stQtr": 524, "2ndQtr": 561, "3rdQtr": 611, "4thQtr": 650, "Total": 153 },
    "PerStaff": { "1stQtr": 27, "2ndQtr": 37, "3rdQtr": 50, "4thQtr": 39, "Total": 153 },
    "Staff": 3
  },
  {
    "Branch": "Dharke Branch",
    "Category": "Outstanding Loan",
    "PreviousYears": 136157,
    "TargetThisFY": { "1stQtr": 141403, "2ndQtr": 148729, "3rdQtr": 155900, "4thQtr": 160274, "Total": 24117 },
    "PerStaff": { "1stQtr": 5246, "2ndQtr": 7326, "3rdQtr": 7171, "4thQtr": 4374, "Total": 24117 },
    "Staff": 3
  },
  {
    "Branch": "Dharke Branch",
    "Category": "Saving",
    "PreviousYears": 14077,
    "TargetThisFY": { "1stQtr": 21210, "2ndQtr": 26771, "3rdQtr": 32739, "4thQtr": 40068, "Total": 25991 },
    "PerStaff": { "1stQtr": 7133, "2ndQtr": 5561, "3rdQtr": 5968, "4thQtr": 7329, "Total": 25991 },
    "Staff": 3
  },
  {
    "Branch": "Dharke Branch",
    "Category": "P/L",
    "PreviousYears": 1246488,
    "TargetThisFY": { "1stQtr": 745078, "2ndQtr": 894778, "3rdQtr": 1127262, "4thQtr": 1279765, "Total": 4046883 },
    "PerStaff": { "1stQtr": 745078, "2ndQtr": 894778, "3rdQtr": 1127262, "4thQtr": 1279765, "Total": 4046883 },
    "Staff": 3
  },
  {
    "Branch": "Dharke Branch",
    "Category": "Risk",
    "PreviousYears": 47719,
    "TargetThisFY": { "1stQtr": 39975, "2ndQtr": 30295, "3rdQtr": 16744, "4thQtr": 9000, "Total": -38719 },
    "PerStaff": { "1stQtr": -7744, "2ndQtr": -9680, "3rdQtr": -13551, "4thQtr": -7744, "Total": -38719 },
    "Staff": 3
  },
  {
    "Branch": "Dharke Branch",
    "Category": "NPL",
    "PreviousYears": 5857,
    "TargetThisFY": { "1stQtr": 5326, "2ndQtr": 4661, "3rdQtr": 3731, "4thQtr": 3200, "Total": -2657 },
    "PerStaff": { "1stQtr": -531, "2ndQtr": -665, "3rdQtr": -930, "4thQtr": -531, "Total": -2657 },
    "Staff": 3
  },
  {
    "Branch": "Dharke Branch",
    "Category": "Watchlist",
    "PreviousYears": 10235,
    "TargetThisFY": { "1stQtr": 9588, "2ndQtr": 8779, "3rdQtr": 7647, "4thQtr": 7000, "Total": -3235 },
    "PerStaff": { "1stQtr": -647, "2ndQtr": -809, "3rdQtr": -1132, "4thQtr": -647, "Total": -3235 },
    "Staff": 3
  },
  {
    "Branch": "Dharke Branch",
    "Category": "Int Due",
    "PreviousYears": 2338,
    "TargetThisFY": { "1stQtr": 2287, "2ndQtr": 2203, "3rdQtr": 2085, "4thQtr": 2000, "Total": -338 },
    "PerStaff": { "1stQtr": -51, "2ndQtr": -84, "3rdQtr": -118, "4thQtr": -85, "Total": -338 },
    "Staff": 3
  },
  {
    "Branch": "Dharke Branch",
    "Category": "Restructu..",
    "PreviousYears": null,
    "TargetThisFY": { "1stQtr": 0, "2ndQtr": 0, "3rdQtr": 0, "4thQtr": 0, "Total": 0 },
    "PerStaff": { "1stQtr": 0, "2ndQtr": 0, "3rdQtr": 0, "4thQtr": 0, "Total": 0 },
    "Staff": 3
  },
  {
    "Branch": "DORAMBHA BRANCH",
    "Category": "Member",
    "PreviousYears": 881,
    "TargetThisFY": { "1stQtr": 906, "2ndQtr": 949, "3rdQtr": 1008, "4thQtr": 1050, "Total": 169 },
    "PerStaff": { "1stQtr": 25, "2ndQtr": 43, "3rdQtr": 59, "4thQtr": 42, "Total": 169 },
    "Staff": 3
  },
  {
    "Branch": "DORAMBHA BRANCH",
    "Category": "Loanee",
    "PreviousYears": 328,
    "TargetThisFY": { "1stQtr": 381, "2ndQtr": 427, "3rdQtr": 474, "4thQtr": 475, "Total": 147 },
    "PerStaff": { "1stQtr": 53, "2ndQtr": 46, "3rdQtr": 47, "4thQtr": 1, "Total": 147 },
    "Staff": 3
  },
  {
    "Branch": "DORAMBHA BRANCH",
    "Category": "Outstanding Loan",
    "PreviousYears": 74735,
    "TargetThisFY": { "1stQtr": 85650, "2ndQtr": 96046, "3rdQtr": 106570, "4thQtr": 112558, "Total": 37823 },
    "PerStaff": { "1stQtr": 10915, "2ndQtr": 10396, "3rdQtr": 10524, "4thQtr": 5988, "Total": 37823 },
    "Staff": 3
  },
  {
    "Branch": "DORAMBHA BRANCH",
    "Category": "Saving",
    "PreviousYears": 21945,
    "TargetThisFY": { "1stQtr": 25695, "2ndQtr": 30735, "3rdQtr": 36235, "4thQtr": 39395, "Total": 17450 },
    "PerStaff": { "1stQtr": 3750, "2ndQtr": 5040, "3rdQtr": 5500, "4thQtr": 3160, "Total": 17450 },
    "Staff": 3
  },
  {
    "Branch": "DORAMBHA BRANCH",
    "Category": "P/L",
    "PreviousYears": 518367,
    "TargetThisFY": { "1stQtr": 283097, "2ndQtr": 426477, "3rdQtr": 601354, "4thQtr": 742160, "Total": 2053088 },
    "PerStaff": { "1stQtr": 283097, "2ndQtr": 426477, "3rdQtr": 601354, "4thQtr": 742160, "Total": 2053088 },
    "Staff": 3
  },
  {
    "Branch": "DORAMBHA BRANCH",
    "Category": "Risk",
    "PreviousYears": 9376,
    "TargetThisFY": { "1stQtr": 8209, "2ndQtr": 6752, "3rdQtr": 4711, "4thQtr": 3545, "Total": -5831 },
    "PerStaff": { "1stQtr": -1167, "2ndQtr": -1457, "3rdQtr": -2041, "4thQtr": -1166, "Total": -5831 },
    "Staff": 3
  },
  {
    "Branch": "DORAMBHA BRANCH",
    "Category": "NPL",
    "PreviousYears": 1469,
    "TargetThisFY": { "1stQtr": 1380, "2ndQtr": 1269, "3rdQtr": 1114, "4thQtr": 1025, "Total": -444 },
    "PerStaff": { "1stQtr": -89, "2ndQtr": -111, "3rdQtr": -155, "4thQtr": -89, "Total": -444 },
    "Staff": 3
  },
  {
    "Branch": "DORAMBHA BRANCH",
    "Category": "Watchlist",
    "PreviousYears": 2802,
    "TargetThisFY": { "1stQtr": 2471, "2ndQtr": 2057, "3rdQtr": 1477, "4thQtr": 1145, "Total": -1657 },
    "PerStaff": { "1stQtr": -331, "2ndQtr": -414, "3rdQtr": -580, "4thQtr": -332, "Total": -1657 },
    "Staff": 3
  },
  {
    "Branch": "DORAMBHA BRANCH",
    "Category": "Int Due",
    "PreviousYears": 866,
    "TargetThisFY": { "1stQtr": 787, "2ndQtr": 656, "3rdQtr": 472, "4thQtr": 341, "Total": -525 },
    "PerStaff": { "1stQtr": -79, "2ndQtr": -131, "3rdQtr": -184, "4thQtr": -131, "Total": -525 },
    "Staff": 3
  },
  {
    "Branch": "DORAMBHA BRANCH",
    "Category": "Restructu..",
    "PreviousYears": 0,
    "TargetThisFY": { "1stQtr": 0, "2ndQtr": 0, "3rdQtr": 0, "4thQtr": 0, "Total": 0 },
    "PerStaff": { "1stQtr": 0, "2ndQtr": 0, "3rdQtr": 0, "4thQtr": 0, "Total": 0 },
    "Staff": 3
  },
  {
    "Branch": "GOGANPANI DHADING",
    "Category": "Member",
    "PreviousYears": 1430,
    "TargetThisFY": { "1stQtr": 1456, "2ndQtr": 1498, "3rdQtr": 1558, "4thQtr": 1600, "Total": 170 },
    "PerStaff": { "1stQtr": 26, "2ndQtr": 42, "3rdQtr": 60, "4thQtr": 42, "Total": 170 },
    "Staff": 3
  },
  {
    "Branch": "GOGANPANI DHADING",
    "Category": "Loanee",
    "PreviousYears": 603,
    "TargetThisFY": { "1stQtr": 640, "2ndQtr": 674, "3rdQtr": 716, "4thQtr": 750, "Total": 147 },
    "PerStaff": { "1stQtr": 37, "2ndQtr": 34, "3rdQtr": 42, "4thQtr": 34, "Total": 147 },
    "Staff": 3
  },
  {
    "Branch": "GOGANPANI DHADING",
    "Category": "Outstanding Loan",
    "PreviousYears": 132100,
    "TargetThisFY": { "1stQtr": 140892, "2ndQtr": 152347, "3rdQtr": 162634, "4thQtr": 171081, "Total": 38981 },
    "PerStaff": { "1stQtr": 8792, "2ndQtr": 11455, "3rdQtr": 10287, "4thQtr": 8447, "Total": 38981 },
    "Staff": 3
  },
  {
    "Branch": "GOGANPANI DHADING",
    "Category": "Saving",
    "PreviousYears": 27902,
    "TargetThisFY": { "1stQtr": 32405, "2ndQtr": 39610, "3rdQtr": 45538, "4thQtr": 53035, "Total": 25133 },
    "PerStaff": { "1stQtr": 4503, "2ndQtr": 7205, "3rdQtr": 5928, "4thQtr": 7497, "Total": 25133 },
    "Staff": 3
  },
  {
    "Branch": "GOGANPANI DHADING",
    "Category": "P/L",
    "PreviousYears": 1829414,
    "TargetThisFY": { "1stQtr": 747485, "2ndQtr": 910757, "3rdQtr": 1148540, "4thQtr": 1298525, "Total": 4105307 },
    "PerStaff": { "1stQtr": 747485, "2ndQtr": 910757, "3rdQtr": 1148540, "4thQtr": 1298525, "Total": 4105307 },
        "Staff": 3

  },
  {
    "Branch": "GOGANPANI DHADING",
    "Category": "Risk",
    "PreviousYears": 50299,
    "TargetThisFY": { "1stQtr": 44152, "2ndQtr": 36468, "3rdQtr": 25710, "4thQtr": 19563, "Total": -30736 },
    "PerStaff": { "1stQtr": -6147, "2ndQtr": -7684, "3rdQtr": -10758, "4thQtr": -6147, "Total": -30736 },
        "Staff": 3

  },
  {
    "Branch": "GOGANPANI DHADING",
    "Category": "NPL",
    "PreviousYears": 1301,
    "TargetThisFY": { "1stQtr": 1155, "2ndQtr": 971, "3rdQtr": 741, "4thQtr": 568, "Total": -733 },
    "PerStaff": { "1stQtr": -146, "2ndQtr": -184, "3rdQtr": -230, "4thQtr": -173, "Total": -733 },
        "Staff": 3

  },
  {
    "Branch": "GOGANPANI DHADING",
    "Category": "Watchlist",
    "PreviousYears": 7997,
    "TargetThisFY": { "1stQtr": 7116, "2ndQtr": 6045, "3rdQtr": 4473, "4thQtr": 3592, "Total": -4405 },
    "PerStaff": { "1stQtr": -881, "2ndQtr": -1071, "3rdQtr": -1572, "4thQtr": -881, "Total": -4405 },
      "Staff":  3
  },
  {
    "Branch": "GOGANPANI DHADING",
    "Category": "Int Due",
    "PreviousYears": 5772,
    "TargetThisFY": { "1stQtr": 5663, "2ndQtr": 5483, "3rdQtr": 5231, "4thQtr": 5051, "Total": -721 },
    "PerStaff": { "1stQtr": -109, "2ndQtr": -180, "3rdQtr": -252, "4thQtr": -180, "Total": -721 },
        "Staff": 3

  },
  {
    "Branch": "GOGANPANI DHADING",
    "Category": "Restructu..",
    "PreviousYears": 0,
    "TargetThisFY": { "1stQtr": 0, "2ndQtr": 0, "3rdQtr": 0, "4thQtr": 0, "Total": 0 },
    "PerStaff": { "1stQtr": 0, "2ndQtr": 0, "3rdQtr": 0, "4thQtr": 0, "Total": 0 },
        "Staff": 3
  },
   {
    "Branch": "Jalpa Branch",
    "Category": "Member",
    "PreviousYears": 567,
    "TargetThisFY": { "1stQtr": 609, "2ndQtr": 680, "3rdQtr": 779, "4thQtr": 850, "Total": 283 },
    "PerStaff": { "1stQtr": 42, "2ndQtr": 71, "3rdQtr": 99, "4thQtr": 71, "Total": 283 },
    "Staff": 2
  },
  {
    "Branch": "Jalpa Branch",
    "Category": "Loanee",
    "PreviousYears": 274,
    "TargetThisFY": { "1stQtr": 305, "2ndQtr": 354, "3rdQtr": 421, "4thQtr": 450, "Total": 176 },
    "PerStaff": { "1stQtr": 31, "2ndQtr": 49, "3rdQtr": 67, "4thQtr": 29, "Total": 176 },
    "Staff": 2
  },
  {
    "Branch": "Jalpa Branch",
    "Category": "Loan-000",
    "PreviousYears": 51435,
    "TargetThisFY": { "1stQtr": 60945, "2ndQtr": 72509, "3rdQtr": 86263, "4thQtr": 95000, "Total": 43565 },
    "PerStaff": { "1stQtr": 9510, "2ndQtr": 11564, "3rdQtr": 13754, "4thQtr": 8737, "Total": 43565 },
    "Staff": 2
  },
  {
    "Branch": "Jalpa Branch",
    "Category": "Saving-000",
    "PreviousYears": 22217,
    "TargetThisFY": { "1stQtr": 26816, "2ndQtr": 31904, "3rdQtr": 38818, "4thQtr": 42750, "Total": 20533 },
    "PerStaff": { "1stQtr": 4599, "2ndQtr": 5088, "3rdQtr": 6914, "4thQtr": 3932, "Total": 20533 },
    "Staff": 2
  },
  {
    "Branch": "Jalpa Branch",
    "Category": "P/L",
    "PreviousYears": 689101,
    "TargetThisFY": { "1stQtr": 298852, "2ndQtr": 425411, "3rdQtr": 607220, "4thQtr": 770559, "Total": 2102042 },
    "PerStaff": { "1stQtr": 298852, "2ndQtr": 425411, "3rdQtr": 607220, "4thQtr": 770559, "Total": 2102042 },
    "Staff": 2
  },
  {
    "Branch": "Jalpa Branch",
    "Category": "Risk-000",
    "PreviousYears": 2408,
    "TargetThisFY": { "1stQtr": 2089, "2ndQtr": 1690, "3rdQtr": 1131, "4thQtr": 812, "Total": -1596 },
    "PerStaff": { "1stQtr": -319, "2ndQtr": -399, "3rdQtr": -559, "4thQtr": -319, "Total": -1596 },
    "Staff": 2
  },
  {
    "Branch": "Jalpa Branch",
    "Category": "NPL-000",
    "PreviousYears": 615,
    "TargetThisFY": { "1stQtr": 566, "2ndQtr": 505, "3rdQtr": 419, "4thQtr": 370, "Total": -245 },
    "PerStaff": { "1stQtr": -49, "2ndQtr": -61, "3rdQtr": -86, "4thQtr": -49, "Total": -245 },
    "Staff": 2
  },
  {
    "Branch": "Jalpa Branch",
    "Category": "Watchlist-000",
    "PreviousYears": 481,
    "TargetThisFY": { "1stQtr": 452, "2ndQtr": 416, "3rdQtr": 365, "4thQtr": 336, "Total": -145 },
    "PerStaff": { "1stQtr": -29, "2ndQtr": -36, "3rdQtr": -51, "4thQtr": -29, "Total": -145 },
    "Staff": 2
  },
  {
    "Branch": "Jalpa Branch",
    "Category": "Interest Due-000",
    "PreviousYears": 214,
    "TargetThisFY": { "1stQtr": 203, "2ndQtr": 185, "3rdQtr": 159, "4thQtr": 140, "Total": -74 },
    "PerStaff": { "1stQtr": -11, "2ndQtr": -18, "3rdQtr": -26, "4thQtr": -19, "Total": -74 },
    "Staff": 2
  },
  {
    "Branch": "Jalpa Branch",
    "Category": "Restructure_000",
    "PreviousYears": 0,
    "TargetThisFY": { "1stQtr": 0, "2ndQtr": 0, "3rdQtr": 0, "4thQtr": 0, "Total": 0 },
    "PerStaff": { "1stQtr": 0, "2ndQtr": 0, "3rdQtr": 0, "4thQtr": 0, "Total": 0 },
    "Staff": 2
  },
   {
    "Branch": "JIRI BRANCH",
    "Category": "Member",
    "PreviousYears": 1091,
    "TargetThisFY": { "1stQtr": 1100, "2ndQtr": 1115, "3rdQtr": 1135, "4thQtr": 1150, "Total": 59 },
    "PerStaff": { "1stQtr": 9, "2ndQtr": 15, "3rdQtr": 20, "4thQtr": 15, "Total": 59 },
    "PerMember": { "1stQtr": 5, "2ndQtr": 8, "3rdQtr": 10, "4thQtr": 8, "Total": 30 },
    "Staff": 2
  },
  {
    "Branch": "JIRI BRANCH",
    "Category": "Loanee",
    "PreviousYears": 365,
    "TargetThisFY": { "1stQtr": 385, "2ndQtr": 401, "3rdQtr": 414, "4thQtr": 460, "Total": 95 },
    "PerStaff": { "1stQtr": 20, "2ndQtr": 16, "3rdQtr": 13, "4thQtr": 46, "Total": 95 },
    "PerMember": { "1stQtr": 10, "2ndQtr": 8, "3rdQtr": 7, "4thQtr": 23, "Total": 48 },
    "Staff": 2
  },
  {
    "Branch": "JIRI BRANCH",
    "Category": "Loan-000",
    "PreviousYears": 51980,
    "TargetThisFY": { "1stQtr": 59667, "2ndQtr": 67411, "3rdQtr": 75415, "4thQtr": 85000, "Total": 33020 },
    "PerStaff": { "1stQtr": 7687, "2ndQtr": 7744, "3rdQtr": 8004, "4thQtr": 9585, "Total": 33020 },
    "PerMember": { "1stQtr": 3844, "2ndQtr": 3872, "3rdQtr": 4002, "4thQtr": 4793, "Total": 16510 },
    "Staff": 2
  },
  {
    "Branch": "JIRI BRANCH",
    "Category": "Saving-000",
    "PreviousYears": 10464,
    "TargetThisFY": { "1stQtr": 13723, "2ndQtr": 16853, "3rdQtr": 21116, "4thQtr": 25500, "Total": 15036 },
    "PerStaff": { "1stQtr": 3259, "2ndQtr": 3130, "3rdQtr": 4263, "4thQtr": 4384, "Total": 15036 },
    "PerMember": { "1stQtr": 1630, "2ndQtr": 1565, "3rdQtr": 2132, "4thQtr": 2192, "Total": 7518 },
    "Staff": 2
  },
  {
    "Branch": "JIRI BRANCH",
    "Category": "P/L",
    "PreviousYears": 1955629,
    "TargetThisFY": { "1stQtr": 54226, "2ndQtr": 112678, "3rdQtr": 201883, "4thQtr": 208670, "Total": 577457 },
    "PerStaff": { "1stQtr": 54226, "2ndQtr": 112678, "3rdQtr": 201883, "4thQtr": 208670, "Total": 577457 },
    "PerMember": { "1stQtr": 27113, "2ndQtr": 56339, "3rdQtr": 100942, "4thQtr": 104335, "Total": 288729 },
    "Staff": 2
  },
  {
    "Branch": "JIRI BRANCH",
    "Category": "Risk-000",
    "PreviousYears": 33575,
    "TargetThisFY": { "1stQtr": 29764, "2ndQtr": 25001, "3rdQtr": 18332, "4thQtr": 14522, "Total": -19053 },
    "PerStaff": { "1stQtr": -3811, "2ndQtr": -4763, "3rdQtr": -6669, "4thQtr": -3810, "Total": -19053 },
    "PerMember": { "1stQtr": -1906, "2ndQtr": -2382, "3rdQtr": -3335, "4thQtr": -1905, "Total": -9527 },
    "Staff": 2
  },
  {
    "Branch": "JIRI BRANCH",
    "Category": "NPL-000",
    "PreviousYears": 9972,
    "TargetThisFY": { "1stQtr": 8379, "2ndQtr": 6388, "3rdQtr": 3600, "4thQtr": 2007, "Total": -7965 },
    "PerStaff": { "1stQtr": -1593, "2ndQtr": -1991, "3rdQtr": -2788, "4thQtr": -1593, "Total": -7965 },
    "PerMember": { "1stQtr": -797, "2ndQtr": -996, "3rdQtr": -1394, "4thQtr": -797, "Total": -3983 },
    "Staff": 2
  },
  {
    "Branch": "JIRI BRANCH",
    "Category": "Watchlist-000",
    "PreviousYears": 6453,
    "TargetThisFY": { "1stQtr": 5535, "2ndQtr": 4388, "3rdQtr": 2782, "4thQtr": 1864, "Total": -4589 },
    "PerStaff": { "1stQtr": -918, "2ndQtr": -1147, "3rdQtr": -1606, "4thQtr": -918, "Total": -4589 },
    "PerMember": { "1stQtr": -459, "2ndQtr": -574, "3rdQtr": -803, "4thQtr": -459, "Total": -2295 },
    "Staff": 2
  },
  {
    "Branch": "JIRI BRANCH",
    "Category": "Interest Due-000",
    "PreviousYears": 11084,
    "TargetThisFY": { "1stQtr": 10696, "2ndQtr": 10050, "3rdQtr": 9146, "4thQtr": 8500, "Total": -2584 },
    "PerStaff": { "1stQtr": -388, "2ndQtr": -646, "3rdQtr": -904, "4thQtr": -646, "Total": -2584 },
    "PerMember": { "1stQtr": -194, "2ndQtr": -323, "3rdQtr": -452, "4thQtr": -323, "Total": -1292 },
    "Staff": 2
  },
  {
    "Branch": "JIRI BRANCH",
    "Category": "Restructure_000",
    "PreviousYears": 0,
    "TargetThisFY": { "1stQtr": 0, "2ndQtr": 0, "3rdQtr": 0, "4thQtr": 0, "Total": 0 },
    "PerStaff": { "1stQtr": 0, "2ndQtr": 0, "3rdQtr": 0, "4thQtr": 0, "Total": 0 },
    "PerMember": { "1stQtr": 0, "2ndQtr": 0, "3rdQtr": 0, "4thQtr": 0, "Total": 0 },
    "Staff": 2
  },
   {
    "Branch": "KHANDICHAUR SINDHUPALANCHOK",
    "Category": "Member",
    "PreviousYears": 696,
    "TargetThisFY": { "1stQtr": 727, "2ndQtr": 778, "3rdQtr": 849, "4thQtr": 900, "Total": 204 },
    "PerStaff": { "1stQtr": 31, "2ndQtr": 51, "3rdQtr": 71, "4thQtr": 51, "Total": 204 },
    "Staff": 2
  },
  {
    "Branch": "KHANDICHAUR SINDHUPALANCHOK",
    "Category": "Loanee",
    "PreviousYears": 172,
    "TargetThisFY": { "1stQtr": 211, "2ndQtr": 249, "3rdQtr": 297, "4thQtr": 360, "Total": 188 },
    "PerStaff": { "1stQtr": 39, "2ndQtr": 38, "3rdQtr": 48, "4thQtr": 63, "Total": 188 },
    "Staff": 2
  },
  {
    "Branch": "KHANDICHAUR SINDHUPALANCHOK",
    "Category": "Loan-000",
    "PreviousYears": 49623,
    "TargetThisFY": { "1stQtr": 57946, "2ndQtr": 66189, "3rdQtr": 71316, "4thQtr": 77381, "Total": 27758 },
    "PerStaff": { "1stQtr": 8323, "2ndQtr": 8243, "3rdQtr": 5127, "4thQtr": 6065, "Total": 27758 },
    "Staff": 2
  },
  {
    "Branch": "KHANDICHAUR SINDHUPALANCHOK",
    "Category": "Saving-000",
    "PreviousYears": 11738,
    "TargetThisFY": { "1stQtr": 15646, "2ndQtr": 19857, "3rdQtr": 23178, "4thQtr": 27083, "Total": 15345 },
    "PerStaff": { "1stQtr": 3908, "2ndQtr": 4211, "3rdQtr": 3321, "4thQtr": 3905, "Total": 15345 },
    "Staff": 2
  },
  {
    "Branch": "KHANDICHAUR SINDHUPALANCHOK",
    "Category": "P/L",
    "PreviousYears": -683854,
    "TargetThisFY": { "1stQtr": 169078, "2ndQtr": 241538, "3rdQtr": 357709, "4thQtr": 416804, "Total": 1100658 },
    "PerStaff": { "1stQtr": 169078, "2ndQtr": 241538, "3rdQtr": 357709, "4thQtr": 416804, "Total": 1185129 },
    "Staff": 2
  },
  {
    "Branch": "KHANDICHAUR SINDHUPALANCHOK",
    "Category": "Risk-000",
    "PreviousYears": 10392,
    "TargetThisFY": { "1stQtr": 9643, "2ndQtr": 8708, "3rdQtr": 7398, "4thQtr": 6649, "Total": -3743 },
    "PerStaff": { "1stQtr": -749, "2ndQtr": -935, "3rdQtr": -1310, "4thQtr": -749, "Total": -3743 },
    "Staff": 2
  },
  {
    "Branch": "KHANDICHAUR SINDHUPALANCHOK",
    "Category": "NPL-000",
    "PreviousYears": 6971,
    "TargetThisFY": { "1stQtr": 6653, "2ndQtr": 6256, "3rdQtr": 5699, "4thQtr": 5381, "Total": -1590 },
    "PerStaff": { "1stQtr": -318, "2ndQtr": -397, "3rdQtr": -557, "4thQtr": -318, "Total": -1590 },
    "Staff": 2
  },
  {
    "Branch": "KHANDICHAUR SINDHUPALANCHOK",
    "Category": "Watchlist-000",
    "PreviousYears": 2370,
    "TargetThisFY": { "1stQtr": 2007, "2ndQtr": 1554, "3rdQtr": 920, "4thQtr": 557, "Total": -1813 },
    "PerStaff": { "1stQtr": -363, "2ndQtr": -453, "3rdQtr": -634, "4thQtr": -363, "Total": -1813 },
    "Staff": 2
  },
  {
    "Branch": "KHANDICHAUR SINDHUPALANCHOK",
    "Category": "Interest Due-000",
    "PreviousYears": 2173,
    "TargetThisFY": { "1stQtr": 208, "2ndQtr": 1928, "3rdQtr": 1713, "4thQtr": 1560, "Total": -613 },
    "PerStaff": { "1stQtr": -1965, "2ndQtr": 1720, "3rdQtr": -215, "4thQtr": -153, "Total": -613 },
    "Staff": 2
  },
  {
    "Branch": "KHANDICHAUR SINDHUPALANCHOK",
    "Category": "Restructure_000",
    "PreviousYears": 0,
    "TargetThisFY": { "1stQtr": 0, "2ndQtr": 0, "3rdQtr": 0, "4thQtr": 0, "Total": 0 },
    "PerStaff": { "1stQtr": 0, "2ndQtr": 0, "3rdQtr": 0, "4thQtr": 0, "Total": 0 },
    "Staff": 2
  },
  {
    "Branch": "KISPANG BRANCH",
    "Category": "Member",
    "PreviousYears": 684,
    "TargetThisFY": { "1stQtr": 724, "2ndQtr": 790, "3rdQtr": 884, "4thQtr": 950, "Total": 266 },
    "PerStaff": { "1stQtr": 40, "2ndQtr": 66, "3rdQtr": 94, "4thQtr": 66, "Total": 266 },
    "Staff": 3
  },
  {
    "Branch": "KISPANG BRANCH",
    "Category": "Loanee",
    "PreviousYears": 391,
    "TargetThisFY": { "1stQtr": 416, "2ndQtr": 466, "3rdQtr": 521, "4thQtr": 550, "Total": 159 },
    "PerStaff": { "1stQtr": 25, "2ndQtr": 50, "3rdQtr": 55, "4thQtr": 29, "Total": 159 },
    "Staff": 3
  },
  {
    "Branch": "KISPANG BRANCH",
    "Category": "Loan-000",
    "PreviousYears": 96928,
    "TargetThisFY": { "1stQtr": 106558, "2ndQtr": 114252, "3rdQtr": 119891, "4thQtr": 124246, "Total": 27318 },
    "PerStaff": { "1stQtr": 9630, "2ndQtr": 7694, "3rdQtr": 5639, "4thQtr": 4355, "Total": 27318 },
    "Staff": 3
  },
  {
    "Branch": "KISPANG BRANCH",
    "Category": "Saving-000",
    "PreviousYears": 15298,
    "TargetThisFY": { "1stQtr": 20246, "2ndQtr": 25136, "3rdQtr": 29973, "4thQtr": 33546, "Total": 18248 },
    "PerStaff": { "1stQtr": 4948, "2ndQtr": 4890, "3rdQtr": 4837, "4thQtr": 3573, "Total": 18248 },
    "Staff": 3
  },
  {
    "Branch": "KISPANG BRANCH",
    "Category": "P/L",
    "PreviousYears": 1029477,
    "TargetThisFY": { "1stQtr": 462381, "2ndQtr": 634594, "3rdQtr": 834136, "4thQtr": 966331, "Total": 2897442 },
    "PerStaff": { "1stQtr": 462381, "2ndQtr": 634594, "3rdQtr": 834136, "4thQtr": 966331, "Total": 2897442 },
    "Staff": 3
  },
  {
    "Branch": "KISPANG BRANCH",
    "Category": "Risk-000",
    "PreviousYears": 21129,
    "TargetThisFY": { "1stQtr": 18548, "2ndQtr": 15322, "3rdQtr": 10805, "4thQtr": 8224, "Total": -12905 },
    "PerStaff": { "1stQtr": -2581, "2ndQtr": -3226, "3rdQtr": -4517, "4thQtr": -2581, "Total": -12905 },
    "Staff": 3
  },
  {
    "Branch": "KISPANG BRANCH",
    "Category": "NPL-000",
    "PreviousYears": 2060,
    "TargetThisFY": { "1stQtr": 2043, "2ndQtr": 2022, "3rdQtr": 1992, "4thQtr": 1975, "Total": -85 },
    "PerStaff": { "1stQtr": -17, "2ndQtr": -21, "3rdQtr": -30, "4thQtr": -17, "Total": -85 },
    "Staff": 3
  },
  {
    "Branch": "KISPANG BRANCH",
    "Category": "Watchlist-000",
    "PreviousYears": 8755,
    "TargetThisFY": { "1stQtr": 7629, "2ndQtr": 6221, "3rdQtr": 4249, "4thQtr": 3123, "Total": -5632 },
    "PerStaff": { "1stQtr": -1126, "2ndQtr": -1408, "3rdQtr": -1972, "4thQtr": -1126, "Total": -5632 },
    "Staff": 3
  },
  {
    "Branch": "KISPANG BRANCH",
    "Category": "Interest Due-000",
    "PreviousYears": 1134,
    "TargetThisFY": { "1stQtr": 1106, "2ndQtr": 1059, "3rdQtr": 993, "4thQtr": 946, "Total": -188 },
    "PerStaff": { "1stQtr": -28, "2ndQtr": -47, "3rdQtr": -66, "4thQtr": -47, "Total": -188 },
    "Staff": 3
  },
  {
    "Branch": "KISPANG BRANCH",
    "Category": "Restructure_000",
    "PreviousYears": 0,
    "TargetThisFY": { "1stQtr": 0, "2ndQtr": 0, "3rdQtr": 0, "4thQtr": 0, "Total": 0 },
    "PerStaff": { "1stQtr": 0, "2ndQtr": 0, "3rdQtr": 0, "4thQtr": 0, "Total": 0 },
    "Staff": 3
  },
  {
    "Branch": "KISPANG BRANCH",
    "Category": "STAFF",
    "PreviousYears": 2,
    "TargetThisFY": { "1stQtr": 3, "2ndQtr": 3, "3rdQtr": 3, "4thQtr": 3, "Total": 1 },
    "PerStaff": { "1stQtr": 1, "2ndQtr": 0, "3rdQtr": 0, "4thQtr": 0, "Total": 1 },
    "Staff": 3
  },
  {
    "Branch": "Majhimtar Branch",
    "Category": "Member",
    "PreviousYears": 525,
    "TargetThisFY": { "1stQtr": 525, "2ndQtr": 574, "3rdQtr": 655, "4thQtr": 769, "Total": 244 },
    "Achievement": { "1stQtr": 0, "2ndQtr": 49, "3rdQtr": 81, "4thQtr": 114, "Total": 244 },
    "PerStaff": { "1stQtr": 0, "2ndQtr": 25, "3rdQtr": 41, "4thQtr": 57, "Total": 122 },
    "Staff": 2
  },
  {
    "Branch": "Majhimtar Branch",
    "Category": "Loanee",
    "PreviousYears": 313,
    "TargetThisFY": { "1stQtr": 313, "2ndQtr": 339, "3rdQtr": 380, "4thQtr": 438, "Total": 125 },
    "Achievement": { "1stQtr": 0, "2ndQtr": 26, "3rdQtr": 41, "4thQtr": 58, "Total": 125 },
    "PerStaff": { "1stQtr": 0, "2ndQtr": 13, "3rdQtr": 21, "4thQtr": 29, "Total": 63 },
    "Staff": 2
  },
  {
    "Branch": "Majhimtar Branch",
    "Category": "Loan-000",
    "PreviousYears": 62340,
    "TargetThisFY": { "1stQtr": 69395, "2ndQtr": 79779, "3rdQtr": 91143, "4thQtr": 100000, "Total": 37660 },
    "Achievement": { "1stQtr": 7055, "2ndQtr": 10384, "3rdQtr": 11364, "4thQtr": 8857, "Total": 37660 },
    "PerStaff": { "1stQtr": 3528, "2ndQtr": 5192, "3rdQtr": 5682, "4thQtr": 4429, "Total": 18830 },
    "Staff": 2
  },
  {
    "Branch": "Majhimtar Branch",
    "Category": "Saving-000",
    "PreviousYears": 13122,
    "TargetThisFY": { "1stQtr": 15267, "2ndQtr": 18349, "3rdQtr": 21874, "4thQtr": 25000, "Total": 11878 },
    "Achievement": { "1stQtr": 2145, "2ndQtr": 3082, "3rdQtr": 3525, "4thQtr": 3126, "Total": 11878 },
    "PerStaff": { "1stQtr": 1073, "2ndQtr": 1541, "3rdQtr": 1763, "4thQtr": 1563, "Total": 5939 },
    "Staff": 2
  },
  {
    "Branch": "Majhimtar Branch",
    "Category": "P/L",
    "PreviousYears": 1112404,
    "TargetThisFY": { "1stQtr": 399696, "2ndQtr": 532856, "3rdQtr": 730512, "4thQtr": 832185, "Total": 2495249 },
    "Achievement": { "1stQtr": 399696, "2ndQtr": 532856, "3rdQtr": 730512, "4thQtr": 832185, "Total": 2495249 },
    "PerStaff": { "1stQtr": 199848, "2ndQtr": 266428, "3rdQtr": 365256, "4thQtr": 416093, "Total": 1247625 },
    "Staff": 2
  },
  {
    "Branch": "Majhimtar Branch",
    "Category": "Risk-000",
    "PreviousYears": 14909,
    "TargetThisFY": { "1stQtr": 12677, "2ndQtr": 9886, "3rdQtr": 5979, "4thQtr": 3746, "Total": -11163 },
    "Achievement": { "1stQtr": -2232, "2ndQtr": -2791, "3rdQtr": -3907, "4thQtr": -2233, "Total": -11163 },
    "PerStaff": { "1stQtr": -1116, "2ndQtr": -1396, "3rdQtr": -1954, "4thQtr": -1117, "Total": -5582 },
    "Staff": 2
  },
  {
    "Branch": "Majhimtar Branch",
    "Category": "NPL-000",
    "PreviousYears": 3691,
    "TargetThisFY": { "1stQtr": 3182, "2ndQtr": 2545, "3rdQtr": 1654, "4thQtr": 1145, "Total": -2546 },
    "Achievement": { "1stQtr": -509, "2ndQtr": -637, "3rdQtr": -891, "4thQtr": -509, "Total": -2546 },
    "PerStaff": { "1stQtr": -255, "2ndQtr": -319, "3rdQtr": -446, "4thQtr": -255, "Total": -1273 },
    "Staff": 2
  },
  {
    "Branch": "Majhimtar Branch",
    "Category": "Watchlist-000",
    "PreviousYears": 2117,
    "TargetThisFY": { "1stQtr": 1726, "2ndQtr": 1237, "3rdQtr": 553, "4thQtr": 163, "Total": -1954 },
    "Achievement": { "1stQtr": -391, "2ndQtr": -489, "3rdQtr": -684, "4thQtr": -390, "Total": -1954 },
    "PerStaff": { "1stQtr": -196, "2ndQtr": -245, "3rdQtr": -342, "4thQtr": -195, "Total": -977 },
    "Staff": 2
  },
  {
    "Branch": "Majhimtar Branch",
    "Category": "Interest Due-000",
    "PreviousYears": 2538,
    "TargetThisFY": { "1stQtr": 2442, "2ndQtr": 2283, "3rdQtr": 2059, "4thQtr": 1900, "Total": -638 },
    "Achievement": { "1stQtr": -96, "2ndQtr": -159, "3rdQtr": -224, "4thQtr": -159, "Total": -638 },
    "PerStaff": { "1stQtr": -48, "2ndQtr": -80, "3rdQtr": -112, "4thQtr": -80, "Total": -319 },
    "Staff": 2
  },
  {
    "Branch": "Majhimtar Branch",
    "Category": "Restructure_000",
    "PreviousYears": 0,
    "TargetThisFY": { "1stQtr": 0, "2ndQtr": 0, "3rdQtr": 0, "4thQtr": 0, "Total": 0 },
    "Achievement": { "1stQtr": 0, "2ndQtr": 0, "3rdQtr": 0, "4thQtr": 0, "Total": 0 },
    "PerStaff": { "1stQtr": 0, "2ndQtr": 0, "3rdQtr": 0, "4thQtr": 0, "Total": 0 },
    "Staff": 2
  },
  {
    "Branch": "Majhimtar Branch",
    "Category": "STAFF",
    "PreviousYears": 1,
    "TargetThisFY": { "1stQtr": 2, "2ndQtr": 2, "3rdQtr": 2, "4thQtr": 2, "Total": 1 },
    "Achievement": { "1stQtr": 1, "2ndQtr": 0, "3rdQtr": 0, "4thQtr": 0, "Total": 1 },
    "PerStaff": { "1stQtr": 1, "2ndQtr": 0, "3rdQtr": 0, "4thQtr": 0, "Total": 1 },
    "Staff": 2
  },
   {
    "Branch": "Parewatar Branch",
    "Category": "Member",
    "PreviousYears": 693,
    "TargetThisFY": { "1stQtr": 739, "2ndQtr": 816, "3rdQtr": 923, "4thQtr": 1000, "Total": 307 },
    "Achievement": { "1stQtr": 46, "2ndQtr": 77, "3rdQtr": 107, "4thQtr": 77, "Total": 307 },
    "PerStaff": { "1stQtr": 23, "2ndQtr": 39, "3rdQtr": 54, "4thQtr": 39, "Total": 154 },
    "Staff": 2
  },
  {
    "Branch": "Parewatar Branch",
    "Category": "Loanee",
    "PreviousYears": 370,
    "TargetThisFY": { "1stQtr": 392, "2ndQtr": 441, "3rdQtr": 508, "4thQtr": 580, "Total": 210 },
    "Achievement": { "1stQtr": 22, "2ndQtr": 49, "3rdQtr": 67, "4thQtr": 72, "Total": 210 },
    "PerStaff": { "1stQtr": 11, "2ndQtr": 25, "3rdQtr": 34, "4thQtr": 36, "Total": 105 },
    "Staff": 2
  },
  {
    "Branch": "Parewatar Branch",
    "Category": "Loan-000",
    "PreviousYears": 76426,
    "TargetThisFY": { "1stQtr": 83823, "2ndQtr": 92071, "3rdQtr": 102573, "4thQtr": 110000, "Total": 33574 },
    "Achievement": { "1stQtr": 7397, "2ndQtr": 8248, "3rdQtr": 10502, "4thQtr": 7427, "Total": 33574 },
    "PerStaff": { "1stQtr": 3699, "2ndQtr": 4124, "3rdQtr": 5251, "4thQtr": 3714, "Total": 16787 },
    "Staff": 2
  },
  {
    "Branch": "Parewatar Branch",
    "Category": "Saving-000",
    "PreviousYears": 12699,
    "TargetThisFY": { "1stQtr": 15926, "2ndQtr": 19335, "3rdQtr": 23592, "4thQtr": 27500, "Total": 14801 },
    "Achievement": { "1stQtr": 3227, "2ndQtr": 3409, "3rdQtr": 4257, "4thQtr": 3908, "Total": 14801 },
    "PerStaff": { "1stQtr": 1614, "2ndQtr": 1705, "3rdQtr": 2129, "4thQtr": 1954, "Total": 7401 },
    "Staff": 2
  },
  {
    "Branch": "Parewatar Branch",
    "Category": "P/L",
    "PreviousYears": 694836,
    "TargetThisFY": { "1stQtr": 556169, "2ndQtr": 694177, "3rdQtr": 875874, "4thQtr": 991812, "Total": 3118032 },
    "Achievement": { "1stQtr": 556169, "2ndQtr": 694177, "3rdQtr": 875874, "4thQtr": 991812, "Total": 3118032 },
    "PerStaff": { "1stQtr": 278085, "2ndQtr": 347089, "3rdQtr": 437937, "4thQtr": 495906, "Total": 1559016 },
    "Staff": 2
  },
  {
    "Branch": "Parewatar Branch",
    "Category": "Risk-000",
    "PreviousYears": 15886,
    "TargetThisFY": { "1stQtr": 14509, "2ndQtr": 12787, "3rdQtr": 10377, "4thQtr": 9000, "Total": -6886 },
    "Achievement": { "1stQtr": -1377, "2ndQtr": -1722, "3rdQtr": -2410, "4thQtr": -1377, "Total": -6886 },
    "PerStaff": { "1stQtr": -689, "2ndQtr": -861, "3rdQtr": -1205, "4thQtr": -689, "Total": -3443 },
    "Staff": 2
  },
  {
    "Branch": "Parewatar Branch",
    "Category": "NPL-000",
    "PreviousYears": 3028,
    "TargetThisFY": { "1stQtr": 2763, "2ndQtr": 2431, "3rdQtr": 1966, "4thQtr": 1700, "Total": -1328 },
    "Achievement": { "1stQtr": -265, "2ndQtr": -332, "3rdQtr": -465, "4thQtr": -266, "Total": -1328 },
    "PerStaff": { "1stQtr": -133, "2ndQtr": -166, "3rdQtr": -233, "4thQtr": -133, "Total": -664 },
    "Staff": 2
  },
  {
    "Branch": "Parewatar Branch",
    "Category": "Watchlist-000",
    "PreviousYears": 4507,
    "TargetThisFY": { "1stQtr": 3605, "2ndQtr": 2479, "3rdQtr": 901, "4thQtr": 0, "Total": -4507 },
    "Achievement": { "1stQtr": -902, "2ndQtr": -1126, "3rdQtr": -1578, "4thQtr": -901, "Total": -4507 },
    "PerStaff": { "1stQtr": -451, "2ndQtr": -563, "3rdQtr": -789, "4thQtr": -451, "Total": -2254 },
    "Staff": 2
  },
  {
    "Branch": "Parewatar Branch",
    "Category": "Interest Due-000",
    "PreviousYears": 1937,
    "TargetThisFY": { "1stQtr": 1849, "2ndQtr": 1702, "3rdQtr": 1497, "4thQtr": 1350, "Total": -587 },
    "Achievement": { "1stQtr": -88, "2ndQtr": -147, "3rdQtr": -205, "4thQtr": -147, "Total": -587 },
    "PerStaff": { "1stQtr": -44, "2ndQtr": -74, "3rdQtr": -103, "4thQtr": -74, "Total": -294 },
    "Staff": 2
  },
  {
    "Branch": "Parewatar Branch",
    "Category": "Restructure_000",
    "PreviousYears": 0,
    "TargetThisFY": { "1stQtr": 0, "2ndQtr": 0, "3rdQtr": 0, "4thQtr": 0, "Total": 0 },
    "Achievement": { "1stQtr": 0, "2ndQtr": 0, "3rdQtr": 0, "4thQtr": 0, "Total": 0 },
    "PerStaff": { "1stQtr": 0, "2ndQtr": 0, "3rdQtr": 0, "4thQtr": 0, "Total": 0 },
    "Staff": 2
  },
  {
    "Branch": "Parewatar Branch",
    "Category": "STAFF",
    "PreviousYears": 1,
    "TargetThisFY": { "1stQtr": 2, "2ndQtr": 2, "3rdQtr": 2, "4thQtr": 2, "Total": 1 },
    "Achievement": { "1stQtr": 1, "2ndQtr": 0, "3rdQtr": 0, "4thQtr": 0, "Total": 1 },
    "PerStaff": { "1stQtr": 1, "2ndQtr": 0, "3rdQtr": 0, "4thQtr": 0, "Total": 1 },
    "Staff": 2
  },
   {
    "Branch": "SIPADOL BHAKTAPUR",
    "Category": "Member",
    "PreviousYears": 2373,
    "TargetThisFY": { "1stQtr": 2377, "2ndQtr": 2384, "3rdQtr": 2393, "4thQtr": 2400, "Total": 27 },
    "Achievement": { "1stQtr": 4, "2ndQtr": 7, "3rdQtr": 9, "4thQtr": 7, "Total": 27 },
    "PerStaff": { "1stQtr": 1, "2ndQtr": 2, "3rdQtr": 3, "4thQtr": 2, "Total": 9 },
    "Staff": 3
  },
  {
    "Branch": "SIPADOL BHAKTAPUR",
    "Category": "Loanee",
    "PreviousYears": 649,
    "TargetThisFY": { "1stQtr": 666, "2ndQtr": 706, "3rdQtr": 950, "4thQtr": 950, "Total": 301 },
    "Achievement": { "1stQtr": 17, "2ndQtr": 40, "3rdQtr": 244, "4thQtr": 0, "Total": 301 },
    "PerStaff": { "1stQtr": 6, "2ndQtr": 13, "3rdQtr": 81, "4thQtr": 0, "Total": 100 },
    "Staff": 3
  },
  {
    "Branch": "SIPADOL BHAKTAPUR",
    "Category": "Loan-000",
    "PreviousYears": 165523,
    "TargetThisFY": { "1stQtr": 173049, "2ndQtr": 181121, "3rdQtr": 188504, "4thQtr": 195063, "Total": 29540 },
    "Achievement": { "1stQtr": 7526, "2ndQtr": 8072, "3rdQtr": 7383, "4thQtr": 6559, "Total": 29540 },
    "PerStaff": { "1stQtr": 2509, "2ndQtr": 2691, "3rdQtr": 2461, "4thQtr": 2186, "Total": 9847 },
    "Staff": 3
  },
  {
    "Branch": "SIPADOL BHAKTAPUR",
    "Category": "Saving-000",
    "PreviousYears": 66134,
    "TargetThisFY": { "1stQtr": 74411, "2ndQtr": 83316, "3rdQtr": 90482, "4thQtr": 97532, "Total": 31398 },
    "Achievement": { "1stQtr": 8277, "2ndQtr": 8905, "3rdQtr": 7166, "4thQtr": 7050, "Total": 31398 },
    "PerStaff": { "1stQtr": 2759, "2ndQtr": 2968, "3rdQtr": 2389, "4thQtr": 2350, "Total": 10466 },
    "Staff": 3
  },
  {
    "Branch": "SIPADOL BHAKTAPUR",
    "Category": "P/L",
    "PreviousYears": 5078225,
    "TargetThisFY": { "1stQtr": 2033334, "2ndQtr": 2280021, "3rdQtr": 2647069, "4thQtr": 2837324, "Total": 9797748 },
    "Achievement": { "1stQtr": 2033334, "2ndQtr": 2280021, "3rdQtr": 2647069, "4thQtr": 2837324, "Total": 9797748 },
    "PerStaff": { "1stQtr": 677778, "2ndQtr": 760007, "3rdQtr": 882356, "4thQtr": 945775, "Total": 3265916 },
    "Staff": 3
  },
  {
    "Branch": "SIPADOL BHAKTAPUR",
    "Category": "Risk-000",
    "PreviousYears": 28384,
    "TargetThisFY": { "1stQtr": 26051, "2ndQtr": 23136, "3rdQtr": 19053, "4thQtr": 16721, "Total": -11663 },
    "Achievement": { "1stQtr": -2333, "2ndQtr": -2915, "3rdQtr": -4083, "4thQtr": -2332, "Total": -11663 },
    "PerStaff": { "1stQtr": -778, "2ndQtr": -972, "3rdQtr": -1361, "4thQtr": -777, "Total": -3888 },
    "Staff": 3
  },
  {
    "Branch": "SIPADOL BHAKTAPUR",
    "Category": "NPL-000",
    "PreviousYears": 8318,
    "TargetThisFY": { "1stQtr": 7812, "2ndQtr": 7180, "3rdQtr": 6295, "4thQtr": 5789, "Total": -2529 },
    "Achievement": { "1stQtr": -506, "2ndQtr": -632, "3rdQtr": -885, "4thQtr": -506, "Total": -2529 },
    "PerStaff": { "1stQtr": -169, "2ndQtr": -211, "3rdQtr": -295, "4thQtr": -169, "Total": -843 },
    "Staff": 3
  },
  {
    "Branch": "SIPADOL BHAKTAPUR",
    "Category": "Watchlist-000",
    "PreviousYears": 8502,
    "TargetThisFY": { "1stQtr": 7959, "2ndQtr": 7281, "3rdQtr": 6332, "4thQtr": 5789, "Total": -2713 },
    "Achievement": { "1stQtr": -543, "2ndQtr": -678, "3rdQtr": -949, "4thQtr": -543, "Total": -2713 },
    "PerStaff": { "1stQtr": -181, "2ndQtr": -226, "3rdQtr": -316, "4thQtr": -181, "Total": -904 },
    "Staff": 3
  },
  {
    "Branch": "SIPADOL BHAKTAPUR",
    "Category": "Interest Due-000",
    "PreviousYears": 5949,
    "TargetThisFY": { "1stQtr": 5814, "2ndQtr": 5589, "3rdQtr": 5275, "4thQtr": 5050, "Total": -899 },
    "Achievement": { "1stQtr": -135, "2ndQtr": -225, "3rdQtr": -314, "4thQtr": -225, "Total": -899 },
    "PerStaff": { "1stQtr": -45, "2ndQtr": -75, "3rdQtr": -105, "4thQtr": -75, "Total": -300 },
    "Staff": 3
  },
  {
    "Branch": "SIPADOL BHAKTAPUR",
    "Category": "Restructure_000",
    "PreviousYears": 0,
    "TargetThisFY": { "1stQtr": 0, "2ndQtr": 0, "3rdQtr": 0, "4thQtr": 0, "Total": 0 },
    "Achievement": { "1stQtr": 0, "2ndQtr": 0, "3rdQtr": 0, "4thQtr": 0, "Total": 0 },
    "PerStaff": { "1stQtr": 0, "2ndQtr": 0, "3rdQtr": 0, "4thQtr": 0, "Total": 0 },
    "Staff": 3
  },
  {
    "Branch": "UGRA TARA KABHRE PALANCHOK",
    "Category": "Member",
    "PreviousYears": 1254,
    "TargetThisFY": { "1stQtr": 1283, "2ndQtr": 1332, "3rdQtr": 1401, "4thQtr": 1450, "Total": 196 },
    "Achievement": { "1stQtr": 29, "2ndQtr": 49, "3rdQtr": 69, "4thQtr": 49, "Total": 196 },
    "PerStaff": { "1stQtr": 15, "2ndQtr": 25, "3rdQtr": 35, "4thQtr": 25, "Total": 98 },
    "Staff": 2
  },
  {
    "Branch": "UGRA TARA KABHRE PALANCHOK",
    "Category": "Loanee",
    "PreviousYears": 423,
    "TargetThisFY": { "1stQtr": 462, "2ndQtr": 493, "3rdQtr": 532, "4thQtr": 600, "Total": 177 },
    "Achievement": { "1stQtr": 39, "2ndQtr": 31, "3rdQtr": 39, "4thQtr": 68, "Total": 177 },
    "PerStaff": { "1stQtr": 20, "2ndQtr": 16, "3rdQtr": 20, "4thQtr": 34, "Total": 89 },
    "Staff": 2
  },
  {
    "Branch": "UGRA TARA KABHRE PALANCHOK",
    "Category": "Loan-000",
    "PreviousYears": 79627,
    "TargetThisFY": { "1stQtr": 87785, "2ndQtr": 95147, "3rdQtr": 103814, "4thQtr": 109483, "Total": 29856 },
    "Achievement": { "1stQtr": 8158, "2ndQtr": 7362, "3rdQtr": 8667, "4thQtr": 5669, "Total": 29856 },
    "PerStaff": { "1stQtr": 4079, "2ndQtr": 3681, "3rdQtr": 4334, "4thQtr": 2835, "Total": 14928 },
    "Staff": 2
  },
  {
    "Branch": "UGRA TARA KABHRE PALANCHOK",
    "Category": "Saving-000",
    "PreviousYears": 39836,
    "TargetThisFY": { "1stQtr": 46087, "2ndQtr": 52331, "3rdQtr": 59693, "4thQtr": 65690, "Total": 25854 },
    "Achievement": { "1stQtr": 6251, "2ndQtr": 6244, "3rdQtr": 7362, "4thQtr": 5997, "Total": 25854 },
    "PerStaff": { "1stQtr": 3126, "2ndQtr": 3122, "3rdQtr": 3681, "4thQtr": 2999, "Total": 12927 },
    "Staff": 2
  },
  {
    "Branch": "UGRA TARA KABHRE PALANCHOK",
    "Category": "P/L",
    "PreviousYears": 3555197,
    "TargetThisFY": { "1stQtr": 1032687, "2ndQtr": 1187244, "3rdQtr": 1392604, "4thQtr": 1558120, "Total": 5170655 },
    "Achievement": { "1stQtr": 1032687, "2ndQtr": 1187244, "3rdQtr": 1392604, "4thQtr": 1558120, "Total": 5170655 },
    "PerStaff": { "1stQtr": 516344, "2ndQtr": 593622, "3rdQtr": 696302, "4thQtr": 779060, "Total": 2585328 },
    "Staff": 2
  },
  {
    "Branch": "UGRA TARA KABHRE PALANCHOK",
    "Category": "Risk-000",
    "PreviousYears": 39,
    "TargetThisFY": { "1stQtr": 39, "2ndQtr": 39, "3rdQtr": 39, "4thQtr": 39, "Total": 0 },
    "Achievement": { "1stQtr": 0, "2ndQtr": 0, "3rdQtr": 0, "4thQtr": 0, "Total": 0 },
    "PerStaff": { "1stQtr": 0, "2ndQtr": 0, "3rdQtr": 0, "4thQtr": 0, "Total": 0 },
    "Staff": 2
  },
  {
    "Branch": "UGRA TARA KABHRE PALANCHOK",
    "Category": "NPL-000",
    "PreviousYears": 0,
    "TargetThisFY": { "1stQtr": 0, "2ndQtr": 0, "3rdQtr": 0, "4thQtr": 0, "Total": 0 },
    "Achievement": { "1stQtr": 0, "2ndQtr": 0, "3rdQtr": 0, "4thQtr": 0, "Total": 0 },
    "PerStaff": { "1stQtr": 0, "2ndQtr": 0, "3rdQtr": 0, "4thQtr": 0, "Total": 0 },
    "Staff": 2
  },
  {
    "Branch": "UGRA TARA KABHRE PALANCHOK",
    "Category": "Watchlist-000",
    "PreviousYears": 0,
    "TargetThisFY": { "1stQtr": 0, "2ndQtr": 0, "3rdQtr": 0, "4thQtr": 0, "Total": 0 },
    "Achievement": { "1stQtr": 0, "2ndQtr": 0, "3rdQtr": 0, "4thQtr": 0, "Total": 0 },
    "PerStaff": { "1stQtr": 0, "2ndQtr": 0, "3rdQtr": 0, "4thQtr": 0, "Total": 0 },
    "Staff": 2
  },
  {
    "Branch": "UGRA TARA KABHRE PALANCHOK",
    "Category": "Interest Due-000",
    "PreviousYears": 36,
    "TargetThisFY": { "1stQtr": 36, "2ndQtr": 36, "3rdQtr": 36, "4thQtr": 36, "Total": 0 },
    "Achievement": { "1stQtr": 0, "2ndQtr": 0, "3rdQtr": 0, "4thQtr": 0, "Total": 0 },
    "PerStaff": { "1stQtr": 0, "2ndQtr": 0, "3rdQtr": 0, "4thQtr": 0, "Total": 0 },
    "Staff": 2
  },
  {
    "Branch": "UGRA TARA KABHRE PALANCHOK",
    "Category": "Restructure_000",
    "PreviousYears": 0,
    "TargetThisFY": { "1stQtr": 0, "2ndQtr": 0, "3rdQtr": 0, "4thQtr": 0, "Total": 0 },
    "Achievement": { "1stQtr": 0, "2ndQtr": 0, "3rdQtr": 0, "4thQtr": 0, "Total": 0 },
    "PerStaff": { "1stQtr": 0, "2ndQtr": 0, "3rdQtr": 0, "4thQtr": 0, "Total": 0 },
    "Staff": 2
  },
  {
    "Branch": "OKHARPAUWA BRANCH",
    "Category": "Member",
    "PreviousYears": 1004,
    "TargetThisFY": { "1stQtr": 1018, "2ndQtr": 1042, "3rdQtr": 1076, "4thQtr": 1100, "Total": 96 },
    "Achievement": { "1stQtr": 14, "2ndQtr": 24, "3rdQtr": 34, "4thQtr": 24, "Total": 96 },
    "PerStaff": { "1stQtr": 7, "2ndQtr": 12, "3rdQtr": 17, "4thQtr": 12, "Total": 48 },
    "Staff": 2
  },
  {
    "Branch": "OKHARPAUWA BRANCH",
    "Category": "Loanee",
    "PreviousYears": 504,
    "TargetThisFY": { "1stQtr": 530, "2ndQtr": 552, "3rdQtr": 581, "4thQtr": 600, "Total": 96 },
    "Achievement": { "1stQtr": 26, "2ndQtr": 22, "3rdQtr": 29, "4thQtr": 19, "Total": 96 },
    "PerStaff": { "1stQtr": 13, "2ndQtr": 11, "3rdQtr": 15, "4thQtr": 10, "Total": 48 },
    "Staff": 2
  },
  {
    "Branch": "OKHARPAUWA BRANCH",
    "Category": "Loan-000",
    "PreviousYears": 84764,
    "TargetThisFY": { "1stQtr": 91086, "2ndQtr": 97788, "3rdQtr": 10549, "4thQtr": 112790, "Total": 28026 },
    "Achievement": { "1stQtr": 6322, "2ndQtr": 6702, "3rdQtr": -87239, "4thQtr": 102241, "Total": 28026 },
    "PerStaff": { "1stQtr": 3161, "2ndQtr": 3351, "3rdQtr": -43620, "4thQtr": 51121, "Total": 14013 },
    "Staff": 2
  },
  {
    "Branch": "OKHARPAUWA BRANCH",
    "Category": "Saving-000",
    "PreviousYears": 26816,
    "TargetThisFY": { "1stQtr": 30969, "2ndQtr": 35204, "3rdQtr": 40185, "4thQtr": 45116, "Total": 18300 },
    "Achievement": { "1stQtr": 4153, "2ndQtr": 4235, "3rdQtr": 4981, "4thQtr": 4931, "Total": 18300 },
    "PerStaff": { "1stQtr": 2077, "2ndQtr": 2118, "3rdQtr": 2491, "4thQtr": 2466, "Total": 9150 },
    "Staff": 2
  },
  {
    "Branch": "OKHARPAUWA BRANCH",
    "Category": "P/L",
    "PreviousYears": 25577,
    "TargetThisFY": { "1stQtr": 303867, "2ndQtr": 409390, "3rdQtr": 551008, "4thQtr": 642640, "Total": 1906905 },
    "Achievement": { "1stQtr": 303867, "2ndQtr": 409390, "3rdQtr": 551008, "4thQtr": 642640, "Total": 1906905 },
    "PerStaff": { "1stQtr": 151934, "2ndQtr": 204695, "3rdQtr": 275504, "4thQtr": 321320, "Total": 953453 },
    "Staff": 2
  },
  {
    "Branch": "OKHARPAUWA BRANCH",
    "Category": "Risk-000",
    "PreviousYears": 22849,
    "TargetThisFY": { "1stQtr": 19635, "2ndQtr": 15618, "3rdQtr": 9994, "4thQtr": 6781, "Total": -16068 },
    "Achievement": { "1stQtr": -3214, "2ndQtr": -4017, "3rdQtr": -5624, "4thQtr": -3213, "Total": -16068 },
    "PerStaff": { "1stQtr": -1607, "2ndQtr": -2009, "3rdQtr": -2812, "4thQtr": -1607, "Total": -8034 },
    "Staff": 2
  },
  {
    "Branch": "OKHARPAUWA BRANCH",
    "Category": "NPL-000",
    "PreviousYears": 5073,
    "TargetThisFY": { "1stQtr": 4204, "2ndQtr": 3117, "3rdQtr": 1595, "4thQtr": 726, "Total": -4347 },
    "Achievement": { "1stQtr": -869, "2ndQtr": -1087, "3rdQtr": -1522, "4thQtr": -869, "Total": -4347 },
    "PerStaff": { "1stQtr": -435, "2ndQtr": -544, "3rdQtr": -761, "4thQtr": -435, "Total": -2174 },
    "Staff": 2
  },
  {
    "Branch": "OKHARPAUWA BRANCH",
    "Category": "Watchlist-000",
    "PreviousYears": 4064,
    "TargetThisFY": { "1stQtr": 3500, "2ndQtr": 2795, "3rdQtr": 1808, "4thQtr": 1244, "Total": -2820 },
    "Achievement": { "1stQtr": -564, "2ndQtr": -705, "3rdQtr": -987, "4thQtr": -564, "Total": -2820 },
    "PerStaff": { "1stQtr": -282, "2ndQtr": -353, "3rdQtr": -494, "4thQtr": -282, "Total": -1410 },
    "Staff": 2
  },
  {
    "Branch": "OKHARPAUWA BRANCH",
    "Category": "Interest Due-000",
    "PreviousYears": 5244,
    "TargetThisFY": { "1stQtr": 5057, "2ndQtr": 4746, "3rdQtr": 4311, "4thQtr": 4000, "Total": -1244 },
    "Achievement": { "1stQtr": -187, "2ndQtr": -311, "3rdQtr": -435, "4thQtr": -311, "Total": -1244 },
    "PerStaff": { "1stQtr": -94, "2ndQtr": -156, "3rdQtr": -218, "4thQtr": -156, "Total": -622 },
    "Staff": 2
  },
  {
    "Branch": "OKHARPAUWA BRANCH",
    "Category": "Restructure_000",
    "PreviousYears": 0,
    "TargetThisFY": { "1stQtr": 0, "2ndQtr": 0, "3rdQtr": 0, "4thQtr": 0, "Total": 0 },
    "Achievement": { "1stQtr": 0, "2ndQtr": 0, "3rdQtr": 0, "4thQtr": 0, "Total": 0 },
    "PerStaff": { "1stQtr": 0, "2ndQtr": 0, "3rdQtr": 0, "4thQtr": 0, "Total": 0 },
    "Staff": 2
  }
]

const PerBranch = ({target_1st_qtr, target_2nd_qtr, target_3rd_qtr, target_4th_qtr, previous_years}:{
  target_1st_qtr: number,
  target_2nd_qtr: number,
  target_3rd_qtr: number,
  target_4th_qtr: number,
  previous_years: number | null
}) => {
  const per_branch_1st_qtr = previous_years ? (target_1st_qtr - previous_years) : 0;
  const per_branch_2nd_qtr = target_2nd_qtr - target_1st_qtr;
  const per_branch_3rd_qtr = target_3rd_qtr - target_2nd_qtr;
  const per_branch_4th_qtr = target_4th_qtr - target_3rd_qtr;
  const per_branch_total = per_branch_1st_qtr + per_branch_2nd_qtr + per_branch_3rd_qtr + per_branch_4th_qtr;

  return (
    <>
      <TableCell>{per_branch_1st_qtr}</TableCell>
      <TableCell>{per_branch_2nd_qtr}</TableCell>
      <TableCell>{per_branch_3rd_qtr}</TableCell>
      <TableCell>{per_branch_4th_qtr}</TableCell>
      <TableCell>{per_branch_total}</TableCell>
    </>
  )
}

const PerStaff = ({target_1st_qtr, target_2nd_qtr, target_3rd_qtr, target_4th_qtr, previous_years, staff}:{
  target_1st_qtr: number,
  target_2nd_qtr: number,
  target_3rd_qtr: number,
  target_4th_qtr: number,
  previous_years: number | null,
  staff: number
}) => {
  const per_branch_1st_qtr = previous_years ? (target_1st_qtr - previous_years) : 0;
  const per_branch_2nd_qtr = target_2nd_qtr - target_1st_qtr;
  const per_branch_3rd_qtr = target_3rd_qtr - target_2nd_qtr;
  const per_branch_4th_qtr = target_4th_qtr - target_3rd_qtr;
  const per_branch_total = per_branch_1st_qtr + per_branch_2nd_qtr + per_branch_3rd_qtr + per_branch_4th_qtr;

  return (
    <>
      <TableCell>{Math.floor(per_branch_1st_qtr/staff)}</TableCell>
      <TableCell>{Math.floor(per_branch_2nd_qtr/staff)}</TableCell>
      <TableCell>{Math.floor(per_branch_3rd_qtr/staff)}</TableCell>
      <TableCell>{Math.floor(per_branch_4th_qtr/staff)}</TableCell>
      <TableCell>{Math.floor(per_branch_total/staff)}</TableCell>
    </>
  )
}



const TableData = ({ selectedBranch }: {
  selectedBranch: string | null;
}) => {
  return (
    <>
      {
        dashboard_data
          .filter(data => data.Branch === selectedBranch)
          .map((row, index) => (
            <TableRow key={index}>
              <TableCell>{index + 1}</TableCell>
              <TableCell>{row.Branch}</TableCell>
              <TableCell>{row.Category}</TableCell>
              <TableCell>{row.PreviousYears}</TableCell>

              {/* Target This FY */}
              <TableCell>{row.TargetThisFY["1stQtr"]}</TableCell>
              <TableCell>{row.TargetThisFY["2ndQtr"]}</TableCell>
              <TableCell>{row.TargetThisFY["3rdQtr"]}</TableCell>
              <TableCell>{row.TargetThisFY["4thQtr"]}</TableCell>
              <TableCell>{row.TargetThisFY["Total"]}</TableCell>

              {/* Target per branch*/}
              <PerBranch
                target_1st_qtr={row.TargetThisFY["1stQtr"]}
                target_2nd_qtr={row.TargetThisFY["2ndQtr"]}
                target_3rd_qtr={row.TargetThisFY["3rdQtr"]}
                target_4th_qtr={row.TargetThisFY["4thQtr"]}
                previous_years={row.PreviousYears}
              />

              {/* Per Staff */}
              <PerStaff
                target_1st_qtr={row.TargetThisFY["1stQtr"]}
                target_2nd_qtr={row.TargetThisFY["2ndQtr"]}
                target_3rd_qtr={row.TargetThisFY["3rdQtr"]}
                target_4th_qtr={row.TargetThisFY["4thQtr"]}
                previous_years={row.PreviousYears}
                staff={row.Staff}
              />

              <TableCell>{row.Staff ?? "-"}</TableCell>
            </TableRow>
          ))}
    </>
  )
}

export function DashboardTable({ selectedBranch }: {
  selectedBranch: string | null;
}) {
  return (
    <Table>
      <TableHeader>
        <TableRow>
          <TableHead>S.N.</TableHead>
          <TableHead>Branch</TableHead>
          <TableHead>Indicators</TableHead>
          <TableHead>Previous Years</TableHead>

          {/* Target This FY */}
          <TableHead>Target 1st Qtr</TableHead>
          <TableHead>Target 2nd Qtr</TableHead>
          <TableHead>Target 3rd Qtr</TableHead>
          <TableHead>Target 4th Qtr</TableHead>
          <TableHead>Target Total</TableHead>

          {/* Target per branch*/}
          <TableHead>Per Branch 1st Qtr</TableHead>
          <TableHead>Per Branch 2nd Qtr</TableHead>
          <TableHead>Per Branch 3rd Qtr</TableHead>
          <TableHead>Per Branch 4th Qtr</TableHead>
          <TableHead>Per Branch Total</TableHead>

          {/* Per Staff */}
          <TableHead>Per Staff 1st Qtr</TableHead>
          <TableHead>Per Staff 2nd Qtr</TableHead>
          <TableHead>Per Staff 3rd Qtr</TableHead>
          <TableHead>Per Staff 4th Qtr</TableHead>
          <TableHead>Per Staff Total</TableHead>

          <TableHead>Staff</TableHead>
        </TableRow>
      </TableHeader>
      <TableBody>
        <TableData selectedBranch={selectedBranch} />
      </TableBody>
    </Table>
  )
}