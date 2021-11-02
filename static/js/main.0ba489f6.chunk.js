(this["webpackJsonpbanking-app-project"]=this["webpackJsonpbanking-app-project"]||[]).push([[0],{11:function(e,t,s){"use strict";s.r(t);var c=s(1),a=s.n(c),n=s(4),r=s.n(n),l=(s(9),s(2)),i=s(0),o=function(){return Object(i.jsxs)("header",{className:"shadow-lg p-5 border-t-4 border-solid border-pink-600 flex",children:[Object(i.jsx)("i",{className:"fas fa-landmark text-4xl mx-2 text-pink-600"}),Object(i.jsx)("h1",{className:"text-4xl",children:"Piggy Bank Financial"})]})};var d=function(e){var t="";return e.value===e.activePage&&(t="text-pink-600"),Object(i.jsx)("div",{className:"m-8 text-xl",children:Object(i.jsx)("span",{className:"cursor-pointer ".concat(t," hover:text-pink-600"),onClick:e.showPage,children:e.name})})};var j=function(e){return Object(i.jsxs)("div",{className:"w-1/5 p-8 ",children:[Object(i.jsx)(d,{activePage:e.activePage,showPage:e.showUsersPage,name:"Users",value:"Users"}),Object(i.jsx)(d,{activePage:e.activePage,showPage:e.showAddUsersPage,name:"Add a user",value:"AddUserPage"}),Object(i.jsx)(d,{activePage:e.activePage,showPage:e.showDelUsersPage,name:"Delete a user",value:"DelUserPage"})]})};var u=function(e){var t=e.userCurrentAccNumber,s=JSON.parse(localStorage.getItem("transactions_".concat(t)));return Object(i.jsxs)("div",{className:"m-6",children:[Object(i.jsx)("span",{className:"text-xl",children:"Transaction History"}),Object(i.jsxs)("table",{className:"table-fixed m-auto w-full flex flex-col",children:[Object(i.jsx)("thead",{className:"flex",children:Object(i.jsxs)("tr",{className:"flex w-full justify-between",children:[Object(i.jsx)("th",{className:"w-1/3",children:"Date"}),Object(i.jsx)("th",{className:"w-1/3",children:"Transaction Details"}),Object(i.jsx)("th",{className:"w-1/3",children:"Amount"})]})}),Object(i.jsx)("tbody",{className:"flex flex-col h-96 overflow-y-scroll",children:s.reverse().map((function(e,t){return Object(i.jsxs)("tr",{className:"flex w-full justify-between",children:[Object(i.jsx)("td",{className:"text-center w-1/3",children:e.timeOfTransaction},"timeOfTransaction"),Object(i.jsx)("td",{className:"w-1/3",children:e.transactionType},"transactionType"),Object(i.jsx)("td",{className:"text-center w-1/3",children:e.transactionAmount},"transactionAmount")]},"transaction_".concat(t))}))})]})]})};var b=function(e){var t=e.users,s=e.setActive,c=e.userCurrentAccNumber,a=e.usersIndex;return Object(i.jsxs)(i.Fragment,{children:[Object(i.jsx)("div",{className:"py-5 m-6 text-center flex flex-wrap fade-in bg-white border-l-4 border-solid border-pink-600",children:Object(i.jsxs)("div",{className:"w-full flex",children:[Object(i.jsxs)("div",{className:"w-2/4 text-left p-4 m-2 mx-7",children:[Object(i.jsxs)("span",{children:["Account Holder: ",t[a].givenName," ",t[a].lastName]}),Object(i.jsx)("br",{}),Object(i.jsxs)("span",{children:["Account Number: ",t[a].accNumber]}),Object(i.jsx)("br",{}),Object(i.jsxs)("span",{children:["Running Balance: \u20b1 ",t[a].balance]})]}),Object(i.jsxs)("div",{className:"w-2/4 flex flex-wrap justify-evenly",children:[Object(i.jsxs)("div",{className:"w-60 m-2 p-4",children:[Object(i.jsx)("i",{className:"fas fa-piggy-bank text-7xl cursor-pointer hover:text-pink-600",onClick:function(){s("DepositPage")}}),Object(i.jsx)("br",{}),Object(i.jsx)("span",{children:"Deposit"})]}),Object(i.jsxs)("div",{className:"w-60 m-2 p-4",children:[Object(i.jsx)("i",{className:"fas fa-wallet text-7xl cursor-pointer hover:text-pink-600",onClick:function(){s("WithdrawPage")}}),Object(i.jsx)("br",{}),Object(i.jsx)("span",{children:"Widthdraw"})]}),Object(i.jsxs)("div",{className:"w-60 m-2 p-4",children:[Object(i.jsx)("i",{className:"fas fa-hand-holding-usd text-7xl cursor-pointer hover:text-pink-600",onClick:function(){s("SendMoney")}}),Object(i.jsx)("br",{}),Object(i.jsx)("span",{children:"Send Money"})]}),Object(i.jsxs)("div",{className:"w-60 m-2 p-4",children:[Object(i.jsx)("i",{className:"fas fa-cash-register text-7xl cursor-pointer hover:text-pink-600",onClick:function(){s("Budget")}}),Object(i.jsx)("br",{}),Object(i.jsx)("span",{children:"Budget"})]})]})]})}),Object(i.jsx)(u,{userCurrentAccNumber:c}),Object(i.jsx)("div",{className:"w-full text-center py-4",children:Object(i.jsx)("i",{className:"fa fa-arrow-left cursor-pointer",onClick:function(){s("Users")},children:" GO BACK"})})]})};var x=function(e){var t=e.users,s=e.setActive,a=e.usersIndex,n=e.userTransactions,r=Object(c.useState)(""),o=Object(l.a)(r,2),d=o[0],j=o[1];return Object(i.jsxs)("div",{className:"w-full py-5 text-center fade-in",children:[Object(i.jsxs)("fieldset",{className:"my-3",children:[Object(i.jsx)("label",{children:"Amount to deposit: "}),Object(i.jsx)("input",{autoComplete:"off",type:"text",id:"amount",name:"amount",className:"mx-2",onChange:function(e){var t=e.target.value;(""===t||t.match(/^[0-9\b]+$/))&&j(t)},value:d})]}),Object(i.jsx)("button",{className:"my-3 bg-pink-500 hover:bg-pink-600 text-white font-bold py-2 px-4 border border-pink-700 rounded w-40 m-auto",onClick:function(){if(0!==parseInt(d)){t[a].balance=parseInt(t[a].balance)+parseInt(d),localStorage.setItem("users",JSON.stringify(t));var e=new Date,c="".concat(e.getDate(),"/").concat(e.getMonth()+1,"/").concat(e.getFullYear());n.push({transactionType:"Deposited Funds",transactionAmount:"\u20b1 ".concat(d),timeOfTransaction:c}),localStorage.setItem("transactions_".concat(t[a].accNumber),JSON.stringify(n)),j(""),s("DepositSuccesful")}},children:"Deposit Funds"}),Object(i.jsx)("br",{}),Object(i.jsx)("i",{className:"fa fa-arrow-left cursor-pointer",onClick:function(){s("UserInformation")},children:" GO BACK"})]})};var m=function(e){var t=e.users,s=e.setActive,a=e.usersIndex,n=e.userTransactions,r=Object(c.useState)(""),o=Object(l.a)(r,2),d=o[0],j=o[1];return Object(i.jsxs)("div",{className:"w-full py-5 text-center fade-in",children:[Object(i.jsxs)("fieldset",{className:"my-3",children:[Object(i.jsx)("label",{children:"Amount to withdraw: "}),Object(i.jsx)("input",{autoComplete:"off",type:"text",id:"amount",name:"amount",className:"mx-2",onChange:function(e){var t=e.target.value;(""===t||t.match(/^[0-9\b]+$/))&&j(t)},value:d})]}),Object(i.jsx)("button",{className:"my-3 bg-pink-500 hover:bg-pink-600 text-white font-bold py-2 px-4 border border-pink-700 rounded w-50 m-auto",onClick:function(){if(parseInt(d)<=parseInt(t[a].balance)&&0!==parseInt(d)){t[a].balance=parseInt(t[a].balance)-parseInt(d),localStorage.setItem("users",JSON.stringify(t));var e=new Date,c="".concat(e.getDate(),"/").concat(e.getMonth()+1,"/").concat(e.getFullYear());n.push({transactionType:"Withdrawn Funds",transactionAmount:"-\u20b1 ".concat(d),timeOfTransaction:c}),localStorage.setItem("transactions_".concat(t[a].accNumber),JSON.stringify(n)),j(""),s("WithdrawSuccess")}else s("NotEnoughFunds")},children:"Withdraw Funds"}),Object(i.jsx)("br",{}),Object(i.jsx)("i",{className:"fa fa-arrow-left cursor-pointer",onClick:function(){s("UserInformation")},children:" GO BACK"})]})};var f=function(e){var t,s=e.users,a=e.setActive,n=e.usersIndex,r=e.userTransactions,o=[];s.forEach((function(e){e.accNumber!==s[n].accNumber&&o.push(e.accNumber)}));var d=Object(c.useState)(""),j=Object(l.a)(d,2),u=j[0],b=j[1],x=Object(c.useState)(null),m=Object(l.a)(x,2),f=m[0],O=m[1];return Object(i.jsxs)("div",{className:"w-full py-5 text-center fade-in",children:[Object(i.jsxs)("fieldset",{className:"my-3",children:[Object(i.jsx)("label",{children:"Amount to transfer: "}),Object(i.jsx)("input",{autoComplete:"off",type:"text",id:"amount",name:"amount",className:"mx-2",onChange:function(e){var t=e.target.value;(""===t||t.match(/^[0-9\b]+$/))&&b(t)},value:u})]}),Object(i.jsxs)("fieldset",{className:"my-3",children:[Object(i.jsx)("label",{children:"Transfer to: "}),Object(i.jsxs)("select",{className:"mx-2",name:"users",onChange:function(e){O(e.target.value)},defaultValue:"default",children:[Object(i.jsx)("option",{value:"default",disabled:!0,hidden:!0,children:"Select account number"}),o.map((function(e){return Object(i.jsx)("option",{children:e},e)}))]})]}),Object(i.jsx)("button",{className:"my-3 bg-pink-500 hover:bg-pink-600 text-white font-bold py-2 px-4 border border-pink-700 rounded w-50 m-auto",onClick:function(){if(""!==u&&null!==f)if(parseInt(u)<=parseInt(s[n].balance)&&0!==parseInt(u)){s[n].balance=parseInt(s[n].balance)-parseInt(u);for(var e=0;e<s.length;e++)f===s[e].accNumber&&(t=e);var c=JSON.parse(localStorage.getItem("transactions_".concat(s[t].accNumber)));s[t].balance=parseInt(s[t].balance)+parseInt(u),localStorage.setItem("users",JSON.stringify(s));var l=new Date,i="".concat(l.getDate(),"/").concat(l.getMonth()+1,"/").concat(l.getFullYear());r.push({transactionType:"Sent Money to ".concat(s[t].givenName),transactionAmount:"-\u20b1 ".concat(u),timeOfTransaction:i}),localStorage.setItem("transactions_".concat(s[n].accNumber),JSON.stringify(r)),c.push({transactionType:"Received Money from ".concat(s[n].givenName),transactionAmount:"\u20b1 ".concat(u),timeOfTransaction:i}),localStorage.setItem("transactions_".concat(s[t].accNumber),JSON.stringify(c)),b(""),a("TransferSuccess")}else a("NotEnoughFunds")},children:"Transfer Funds"}),Object(i.jsx)("br",{}),Object(i.jsx)("i",{className:"fa fa-arrow-left cursor-pointer",onClick:function(){a("UserInformation")},children:" GO BACK"})]})};var O=function(e){var t=e.userCurrentAccNumber,s=JSON.parse(localStorage.getItem("expenses_".concat(t)));return null!==s?Object(i.jsxs)(i.Fragment,{children:[Object(i.jsxs)("div",{className:"m-6",children:[Object(i.jsx)("span",{className:"text-xl",children:"Expenses"}),Object(i.jsxs)("table",{className:"table-fixed m-auto w-full",children:[Object(i.jsx)("thead",{children:Object(i.jsxs)("tr",{children:[Object(i.jsx)("th",{children:"Date"}),Object(i.jsx)("th",{children:"Expense Details"}),Object(i.jsx)("th",{children:"Amount"}),Object(i.jsx)("th",{children:"Delete"})]})}),Object(i.jsx)("tbody",{children:s.reverse().map((function(t,s){return Object(i.jsxs)("tr",{children:[Object(i.jsx)("td",{children:t.timeExpenseAdded},"timeExpenseAdded"),Object(i.jsx)("td",{children:t.expenseDetails},"expenseDetails"),Object(i.jsx)("td",{className:"text-center",children:"-\u20b1 ".concat(t.expenseAmount)},"expenseAmount"),Object(i.jsx)("td",{className:"text-center",children:Object(i.jsx)("i",{id:s,className:"fas fa-trash-alt cursor-pointer",onClick:e.deleteExpense})})]},"expense_".concat(s))}))})]})]}),Object(i.jsx)("div",{className:"text-center",children:Object(i.jsx)("button",{className:"bg-pink-500 hover:bg-pink-600 text-white font-bold py-2 px-4 border border-pink-700 rounded w-50 m-auto",onClick:e.showAddExpensePage,children:"Add an Expense"})})]}):Object(i.jsxs)(i.Fragment,{children:[Object(i.jsxs)("div",{className:"m-6",children:[Object(i.jsx)("span",{className:"text-xl",children:"Expenses"}),Object(i.jsxs)("table",{className:"table-fixed m-auto w-full",children:[Object(i.jsx)("thead",{children:Object(i.jsxs)("tr",{children:[Object(i.jsx)("th",{children:"Date"}),Object(i.jsx)("th",{children:"Expense Details"}),Object(i.jsx)("th",{children:"Amount"})]})}),Object(i.jsx)("tbody",{})]})]}),Object(i.jsx)("div",{className:"text-center",children:Object(i.jsx)("button",{className:"bg-pink-500 hover:bg-pink-600 text-white font-bold py-2 px-4 border border-pink-700 rounded w-50 m-auto",onClick:e.showAddExpensePage,children:"Add an Expense"})})]})};var h=function(e){var t=e.users,s=e.setActive,c=e.userCurrentAccNumber,a=e.usersIndex,n=JSON.parse(localStorage.getItem("expenses_".concat(c))),r=t[a].balance;if(null!==n)for(var l=0;l<n.length;l++)r-=n[l].expenseAmount;return Object(i.jsxs)(i.Fragment,{children:[Object(i.jsxs)("div",{className:"py-5 m-6 fade-in bg-white border-l-4 border-solid border-pink-600 text-center",children:[Object(i.jsx)("h1",{className:"text-2xl",children:"Projected Balance"}),Object(i.jsx)("span",{className:"text-xl",children:"\u20b1 ".concat(r)})]}),Object(i.jsx)(O,{deleteExpense:function(e){console.log(e.target.id),n.reverse().splice(e.target.id,1),n.reverse(),localStorage.setItem("expenses_".concat(c),JSON.stringify(n)),0===n.length&&localStorage.removeItem("expenses_".concat(c)),s("ExpenseDeleted")},showAddExpensePage:function(){s("AddExpense")},userCurrentAccNumber:c}),Object(i.jsx)("div",{className:"w-full text-center py-4",children:Object(i.jsx)("i",{className:"fa fa-arrow-left cursor-pointer",onClick:function(){s("UserInformation")},children:" GO BACK"})})]})};var p=function(e){var t=e.setActive;return Object(i.jsxs)("div",{className:"w-full py-5 text-center fade-in",children:[Object(i.jsx)("span",{children:"Your money was deposited sucessfully!"}),Object(i.jsx)("br",{}),Object(i.jsx)("i",{className:"fa fa-arrow-left cursor-pointer",onClick:function(){t("UserInformation")},children:" GO BACK"})]})};var g=function(e){var t=e.setActive;return Object(i.jsxs)("div",{className:"w-full py-5 text-center fade-in",children:[Object(i.jsx)("span",{children:"Your money was withdrawn sucessfully!"}),Object(i.jsx)("br",{}),Object(i.jsx)("i",{className:"fa fa-arrow-left cursor-pointer",onClick:function(){t("UserInformation")},children:" GO BACK"})]})};var v=function(e){var t=e.setActive;return Object(i.jsxs)("div",{className:"w-full py-5 text-center fade-in",children:[Object(i.jsx)("span",{children:"You have insufficient balace for this transaction!"}),Object(i.jsx)("br",{}),Object(i.jsx)("i",{className:"fa fa-arrow-left cursor-pointer",onClick:function(){t("UserInformation")},children:" GO BACK"})]})};var N=function(e){var t=e.setActive;return Object(i.jsxs)("div",{className:"w-full py-5 text-center fade-in",children:[Object(i.jsx)("span",{children:"Your funds had been transfered!"}),Object(i.jsx)("br",{}),Object(i.jsx)("i",{className:"fa fa-arrow-left cursor-pointer",onClick:function(){t("UserInformation")},children:" GO BACK"})]})};var w=function(e){var t=e.setActive,s=e.userCurrentAccNumber,a=Object(c.useState)(""),n=Object(l.a)(a,2),r=n[0],o=n[1],d=Object(c.useState)(""),j=Object(l.a)(d,2),u=j[0],b=j[1];return Object(i.jsxs)(i.Fragment,{children:[Object(i.jsxs)("div",{className:"py-5 m-6 fade-in bg-white border-l-4 border-solid border-pink-600 text-center",children:[Object(i.jsxs)("fieldset",{className:"my-3",children:[Object(i.jsx)("label",{children:"Expense Details: "}),Object(i.jsx)("input",{autoComplete:"off",type:"text",id:"expDetails",name:"expDetails",className:"mx-2 border-b-2 border-solid border-pink-600",onChange:function(e){var t=e.target.value;(""===t||t.match(/^[A-Za-z ]+$/))&&b(t)},value:u})]}),Object(i.jsxs)("fieldset",{className:"my-3",children:[Object(i.jsx)("label",{children:"Expense Amount: "}),Object(i.jsx)("input",{autoComplete:"off",type:"text",id:"expense",name:"expense",className:"mx-2 border-b-2 border-solid border-pink-600",onChange:function(e){var t=e.target.value;(""===t||t.match(/^[0-9\b]+$/))&&o(t)},value:r})]}),Object(i.jsx)("button",{className:"bg-pink-500 hover:bg-pink-600 text-white font-bold py-2 px-4 border border-pink-700 rounded w-40 m-auto",onClick:function(){if(""!==r&&""!==u){var e=JSON.parse(localStorage.getItem("expenses_".concat(s)));if(null===e){var c=new Date,a="".concat(c.getDate(),"/").concat(c.getMonth()+1,"/").concat(c.getFullYear());localStorage.setItem("expenses_".concat(s),JSON.stringify([{timeExpenseAdded:a,expenseDetails:u,expenseAmount:r}]))}else{var n=new Date,l="".concat(n.getDate(),"/").concat(n.getMonth()+1,"/").concat(n.getFullYear());e.push({timeExpenseAdded:l,expenseDetails:u,expenseAmount:r}),localStorage.setItem("expenses_".concat(s),JSON.stringify(e))}t("ExpenseAdded")}},children:"Add Expense"})]}),Object(i.jsx)("div",{className:"w-full py-5 text-center fade-in",children:Object(i.jsx)("i",{className:"fa fa-arrow-left cursor-pointer",onClick:function(){t("Budget")},children:" GO BACK"})})]})};var A=function(e){var t=e.setActive;return Object(i.jsxs)("div",{className:"w-full py-5 text-center fade-in",children:[Object(i.jsx)("span",{children:"Expense Deleted Sucessfully!"}),Object(i.jsx)("br",{}),Object(i.jsx)("i",{className:"fa fa-arrow-left cursor-pointer",onClick:function(){t("Budget")},children:" GO BACK"})]})};var y=function(e){var t=e.setActive;return Object(i.jsxs)("div",{className:"w-full py-5 text-center fade-in",children:[Object(i.jsx)("span",{children:"Expense Added Sucessfully!"}),Object(i.jsx)("br",{}),Object(i.jsx)("i",{className:"fa fa-arrow-left cursor-pointer",onClick:function(){t("Budget")},children:" GO BACK"})]})};var S=function(e){var t=Object(c.useState)("Users"),s=Object(l.a)(t,2),a=s[0],n=s[1],r=Object(c.useState)(""),o=Object(l.a)(r,2),d=o[0],j=o[1],u=Object(c.useState)(""),O=Object(l.a)(u,2),S=O[0],C=O[1],k=Object(c.useState)(""),I=Object(l.a)(k,2),U=I[0],D=I[1],P=e.users,E=e.setUsers;function T(e){C(e.target.innerHTML),""!==d&&""!==U&&""!==S&&n("UserInformation")}return Object(c.useEffect)((function(){if(""!==P&&null!==P)for(var e=0;e<P.length;e++)S===P[e].accNumber&&D(e)}),[S,P]),Object(c.useEffect)((function(){""!==U&&""!==S&&j(JSON.parse(localStorage.getItem("transactions_".concat(P[U].accNumber))))}),[P,U,S,j]),Object(c.useEffect)((function(){""!==d&&""!==U&&""!==S&&n("UserInformation")}),[d,U,S]),console.log(P),null===P?Object(i.jsx)(i.Fragment,{children:Object(i.jsxs)("div",{className:"w-full py-5 text-center fade-in",children:[Object(i.jsx)("span",{children:"NO USERS ON RECORD"}),Object(i.jsx)("br",{})]})}):Object(i.jsxs)(i.Fragment,{children:["Users"===a&&Object(i.jsx)("div",{className:"w-full py-5 text-center fade-in",children:Object(i.jsxs)("table",{className:"users-table table-auto border-solid border-2 m-auto bg-white",children:[Object(i.jsx)("thead",{children:Object(i.jsxs)("tr",{className:"users-table border-solid",children:[Object(i.jsx)("th",{className:"users-table border-solid",children:"Account Number"}),Object(i.jsx)("th",{className:"users-table border-solid",children:"Given Name"}),Object(i.jsx)("th",{className:"users-table border-solid",children:"Last Name"}),Object(i.jsx)("th",{className:"users-table border-solid",children:"Balance"})]})}),Object(i.jsx)("tbody",{children:P.map((function(e){return Object(i.jsxs)("tr",{children:[Object(i.jsx)("td",{className:"cursor-pointer hover:underline font-bold hover:text-pink-600 users-table border-solid",onClick:T,children:e.accNumber},"accNumber"),Object(i.jsx)("td",{className:"users-table border-solid",children:e.givenName},"givenName"),Object(i.jsx)("td",{className:"users-table border-solid",children:e.lastName},"lastName"),Object(i.jsx)("td",{className:"users-table border-solid",children:"\u20b1 ".concat(e.balance)},"balance")]},e.accNumber)}))})]})}),"UserInformation"===a&&Object(i.jsx)(b,{users:P,setActive:n,userCurrentAccNumber:S,usersIndex:U,setUsers:E}),"DepositPage"===a&&Object(i.jsx)(x,{users:P,setActive:n,usersIndex:U,userTransactions:d,setUsers:E}),"WithdrawPage"===a&&Object(i.jsx)(m,{users:P,setActive:n,usersIndex:U,userTransactions:d,setUsers:E}),"SendMoney"===a&&Object(i.jsx)(f,{users:P,setActive:n,usersIndex:U,userTransactions:d,setUsers:E}),"Budget"===a&&Object(i.jsx)(h,{users:P,setActive:n,userCurrentAccNumber:S,usersIndex:U}),"DepositSuccesful"===a&&Object(i.jsx)(p,{setActive:n}),"WithdrawSuccess"===a&&Object(i.jsx)(g,{setActive:n}),"NotEnoughFunds"===a&&Object(i.jsx)(v,{setActive:n}),"TransferSuccess"===a&&Object(i.jsx)(N,{setActive:n}),"ExpenseDeleted"===a&&Object(i.jsx)(A,{setActive:n}),"AddExpense"===a&&Object(i.jsx)(w,{setActive:n,userCurrentAccNumber:S}),"ExpenseAdded"===a&&Object(i.jsx)(y,{setActive:n})]})};var C=function(e){var t=e.setActive;return Object(i.jsxs)("div",{className:"w-full py-5 text-center fade-in",children:[Object(i.jsx)("span",{children:"User Added Sucessfully!"}),Object(i.jsx)("br",{}),Object(i.jsx)("i",{className:"fa fa-arrow-left cursor-pointer",onClick:function(){t("AddUserPage")},children:" GO BACK"})]})};var k=function(e){var t=e.setActive;return Object(i.jsxs)("div",{className:"w-full py-5 text-center fade-in",children:[Object(i.jsx)("span",{children:"Account number is already active!"}),Object(i.jsx)("br",{}),Object(i.jsx)("i",{className:"fa fa-arrow-left cursor-pointer",onClick:function(){t("AddUserPage")},children:" GO BACK"})]})};var I=function(e){var t=Object(c.useState)("AddUserPage"),s=Object(l.a)(t,2),a=s[0],n=s[1],r=e.users,o=e.setUsers,d=!1,j=Object(c.useState)(""),u=Object(l.a)(j,2),b=u[0],x=u[1],m=Object(c.useState)(""),f=Object(l.a)(m,2),O=f[0],h=f[1],p=Object(c.useState)(""),g=Object(l.a)(p,2),v=g[0],N=g[1],w=Object(c.useState)(""),A=Object(l.a)(w,2),y=A[0],S=A[1];return Object(i.jsxs)(i.Fragment,{children:["AddUserPage"===a&&Object(i.jsxs)("div",{className:"m-auto py-5 flex flex-col text-center justify-center fade-in",children:[Object(i.jsxs)("fieldset",{className:"my-3",children:[Object(i.jsx)("label",{className:"my-3",children:"Name:"}),Object(i.jsx)("input",{autoComplete:"off",type:"text",id:"givenName",name:"givenName",className:"mx-2",onChange:function(e){var t=e.target.value;(""===t||t.match(/^[A-Za-z ]+$/))&&x(t)},value:b})]}),Object(i.jsxs)("fieldset",{className:"my-3",children:[Object(i.jsx)("label",{children:"Last Name:"}),Object(i.jsx)("input",{autoComplete:"off",type:"text",id:"lastName",name:"lastName",className:"mx-2",onChange:function(e){var t=e.target.value;(""===t||t.match(/^[A-Za-z ]+$/))&&h(t)},value:O})]}),Object(i.jsxs)("fieldset",{className:"my-3",children:[Object(i.jsx)("label",{children:"Account Number:"}),Object(i.jsx)("input",{autoComplete:"off",type:"text",id:"accNumber",name:"accNumber",className:"mx-2",onChange:function(e){var t=e.target.value;(""===t||t.match(/^[0-9\b]+$/))&&N(t)},value:v})]}),Object(i.jsxs)("fieldset",{className:"my-3",children:[Object(i.jsx)("label",{children:"Starting Balance:"}),Object(i.jsx)("input",{autoComplete:"off",type:"text",id:"balance",name:"balance",className:"mx-2",onChange:function(e){var t=e.target.value;(""===t||t.match(/^[0-9\b]+$/))&&S(t)},value:y})]}),Object(i.jsx)("button",{className:"bg-pink-500 hover:bg-pink-600 text-white font-bold py-2 px-4 border border-pink-700 rounded w-40 m-auto",onClick:function(){if(null!==r){if(""!==b&&""!==O&&""!==v&&""!==y)if(r.forEach((function(e){v===e.accNumber&&(d=!0)})),!1===d){r.push({givenName:b,lastName:O,accNumber:v,balance:y}),localStorage.setItem("users",JSON.stringify(r)),o((function(){return JSON.parse(localStorage.getItem("users"))}));var e=new Date,t="".concat(e.getDate(),"/").concat(e.getMonth()+1,"/").concat(e.getFullYear());localStorage.setItem("transactions_".concat(v),JSON.stringify([{transactionType:"Opened Account",transactionAmount:"\u20b1 ".concat(y),timeOfTransaction:t}])),x(""),h(""),N(""),S(""),n("UserAdded")}else d=!1,n("UserExists")}else if(""!==b&&""!==O&&""!==v&&""!==y){localStorage.setItem("users",JSON.stringify([{givenName:b,lastName:O,accNumber:v,balance:y}])),o((function(){return JSON.parse(localStorage.getItem("users"))}));var s=new Date,c="".concat(s.getDate(),"/").concat(s.getMonth()+1,"/").concat(s.getFullYear());localStorage.setItem("transactions_".concat(v),JSON.stringify([{transactionType:"Opened Account",transactionAmount:"\u20b1 ".concat(y),timeOfTransaction:c}])),x(""),h(""),N(""),S(""),n("UserAdded")}},children:"Add New User"})]}),"UserAdded"===a&&Object(i.jsx)(C,{setActive:n}),"UserExists"===a&&Object(i.jsx)(k,{setActive:n})]})};var U=function(e){var t=e.setActive;return Object(i.jsxs)("div",{className:"w-full py-5 text-center fade-in",children:[Object(i.jsx)("span",{children:"User Deleted Sucessfully!"}),Object(i.jsx)("br",{}),Object(i.jsx)("i",{className:"fa fa-arrow-left cursor-pointer",onClick:function(){t("DelUserPage")},children:" GO BACK"})]})};var D=function(e){var t=e.users,s=e.setUsers,a=Object(c.useState)("DelUserPage"),n=Object(l.a)(a,2),r=n[0],o=n[1],d=Object(c.useState)(null),j=Object(l.a)(d,2),u=j[0],b=j[1];return null===t||0===t.length?Object(i.jsxs)("div",{className:"w-full py-5 text-center fade-in",children:[Object(i.jsx)("span",{children:"NO USERS ON RECORD"}),Object(i.jsx)("br",{})]}):Object(i.jsxs)(i.Fragment,{children:["DelUserPage"===r&&Object(i.jsxs)("div",{className:"w-full py-5 text-center fade-in",children:[Object(i.jsxs)("fieldset",{className:"my-3",children:[Object(i.jsx)("label",{children:"List of active users: "}),Object(i.jsxs)("select",{name:"users",onChange:function(e){b(e.target.value)},defaultValue:"default",children:[Object(i.jsx)("option",{value:"default",disabled:!0,hidden:!0,children:"Select a user"}),t.map((function(e){return Object(i.jsx)("option",{children:e.accNumber},e.accNumber)}))]})]}),Object(i.jsx)("button",{className:"my-3 bg-pink-500 hover:bg-pink-600 text-white font-bold py-2 px-4 border border-pink-700 rounded w-40 m-auto",onClick:function(){if(null!==u){for(var e=0;e<t.length;e++)u===t[e].accNumber&&t.splice(e,1);localStorage.setItem("users",JSON.stringify(t)),s((function(){return JSON.parse(localStorage.getItem("users"))})),localStorage.removeItem("transactions_".concat(u)),null!==localStorage.getItem("expenses_".concat(u))&&localStorage.removeItem("expenses_".concat(u)),0===t.length&&(localStorage.removeItem("users"),s(null)),o("UserDeleted")}},children:"Delete User"})]}),"UserDeleted"===r&&Object(i.jsx)(U,{setActive:o})]})};var P=function(e){var t=e.showPage,s=Object(c.useState)((function(){return JSON.parse(localStorage.getItem("users"))})),a=Object(l.a)(s,2),n=a[0],r=a[1];return Object(i.jsxs)("div",{className:"maincontent w-4/5 bg-gray-200",children:["Users"===t&&Object(i.jsx)(S,{users:n,setUsers:r}),"AddUserPage"===t&&Object(i.jsx)(I,{users:n,setUsers:r}),"DelUserPage"===t&&Object(i.jsx)(D,{users:n,setUsers:r})]})};var E=function(){return Object(i.jsx)("div",{className:"w-full bg-color-white shadow-inner text-center p-4",children:Object(i.jsx)("span",{children:"\xa9 2021 Piggy Bank Financial"})})};var T=function(){var e=Object(c.useState)("Users"),t=Object(l.a)(e,2),s=t[0],a=t[1];return Object(i.jsxs)("div",{className:"text-gray-700",children:[Object(i.jsx)(o,{}),Object(i.jsxs)("div",{className:"flex",children:[Object(i.jsx)(j,{activePage:s,showAddUsersPage:function(){a("AddUserPage")},showDelUsersPage:function(){a("DelUserPage")},showUsersPage:function(){a("Users")}}),Object(i.jsx)(P,{showPage:s})]}),Object(i.jsx)(E,{})]})},F=function(e){e&&e instanceof Function&&s.e(3).then(s.bind(null,12)).then((function(t){var s=t.getCLS,c=t.getFID,a=t.getFCP,n=t.getLCP,r=t.getTTFB;s(e),c(e),a(e),n(e),r(e)}))};r.a.render(Object(i.jsx)(a.a.StrictMode,{children:Object(i.jsx)(T,{})}),document.getElementById("root")),F()},9:function(e,t,s){}},[[11,1,2]]]);
//# sourceMappingURL=main.0ba489f6.chunk.js.map