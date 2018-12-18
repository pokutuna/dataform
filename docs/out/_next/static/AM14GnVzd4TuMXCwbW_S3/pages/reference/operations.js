(window.webpackJsonp=window.webpackJsonp||[]).push([[36],{15:function(e,t,n){"use strict";n.d(t,"a",function(){return p});var r=n(0),i=n(32);function o(e){return(o="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(e){return typeof e}:function(e){return e&&"function"==typeof Symbol&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":typeof e})(e)}function a(e,t){for(var n=0;n<t.length;n++){var r=t[n];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(e,r.key,r)}}function s(e,t){return!t||"object"!==o(t)&&"function"!=typeof t?function(e){if(void 0===e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return e}(e):t}function l(e){return(l=Object.setPrototypeOf?Object.getPrototypeOf:function(e){return e.__proto__||Object.getPrototypeOf(e)})(e)}function c(e,t){return(c=Object.setPrototypeOf||function(e,t){return e.__proto__=t,e})(e,t)}var p=function(e){function t(){return function(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}(this,t),s(this,l(t).apply(this,arguments))}var n,o,p;return function(e,t){if("function"!=typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function");e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,writable:!0,configurable:!0}}),t&&c(e,t)}(t,r["Component"]),n=t,(o=[{key:"render",value:function(){return r.createElement("div",null,r.createElement("h2",{id:this.props.name},r.createElement("pre",null,this.props.name)),r.createElement("div",null,this.props.description),r.createElement("div",null,this.props.signatures&&this.props.signatures.map(function(e){return r.createElement("div",{key:e},r.createElement("pre",null,r.createElement("code",null,e)))})),this.props.fields&&r.createElement("div",null,r.createElement("h3",null," Arguments "),r.createElement(i.a,{fields:this.props.fields})),this.props.returns&&r.createElement("div",null,r.createElement("h3",null,"Returns"),r.createElement("p",null,this.props.returns)))}}])&&a(n.prototype,o),p&&a(n,p),t}()},16:function(e,t,n){"use strict";n.d(t,"a",function(){return r});var r={ref:{name:"ref()",signatures:["ref(materializationName)"],description:"Returns the full, query-able name of the referenced table, and adds the table to dependencies.",fields:[{name:"materializationName",type:"string",description:"The name of the materialization to reference"}]},self:{name:"self()",signatures:["self()"],description:"Returns the full, query-able name of the current materialization"},dependencies:{name:"dependencies()",description:'Specifies one or more materializations, operations or assertions that this node depends on. Supports wildcard matches with `"*"`.',signatures:["dependencies(deps)"],fields:[{name:"deps",type:"string | string[]",description:"Either a single dependency name, or a list"}]},postops:{name:"postOps()",signatures:["postOps(ops)"],description:"Provide one of more queries to execute after this materialization has completed.",fields:[{name:"ops",type:"Contextable<string | string[]>",description:"The queries to run"}]},preops:{name:"preOps()",signatures:["preOps(ops)"],description:"Provide one of more queries to execute before this materialization is created.",fields:[{name:"ops",type:"Contextable<string | string[]>",description:"The queries to run"}]},type:{name:"type()",signatures:["type(name)"],description:"Set the type of the materialization. View the [materialization guide](/guides/materializations) for more info.",fields:[{name:"name",type:'"view" | "table" | "incremental"',description:"The type of the materialization"}]},where:{name:"where()",signatures:["where(clause)"],description:"Sets a where clause that is used for incremental tables.",fields:[{name:"clause",type:"Contextable<string>",description:"The where clause. Can be a string or a context function."}]},protected:{name:"protected()",signatures:["protected()"],description:"A incremental table marked protected will never be rebuilt from scratch."},disabled:{name:"disabled()",signatures:["disabled()"],description:"Disable this action from being run."},partitionby:{name:"partitionBy()",signatures:["partitionBy(expression)"],description:"Sets the table partition expression for BigQuery."},config:{name:"config()",signatures:["config(config)"],description:"Sets several properties of the materialization at once.",fields:[{name:"config",type:"MaterializationConfig",description:"The configuration object"}]},descriptor:{name:"descriptor()",signatures:["descriptor(fields)","descriptor(field, description)","descriptor(descriptor)"],description:"Sets the descriptor for fields in this materialization.",fields:[{name:"fields",type:"string[]",description:"A list of field names"},{name:"field",type:"string",description:"The field name"},{name:"description",type:"string",description:"The field description"},{name:"descriptor",type:"{[field: string]: string}",description:"A map of field names to field descriptions"}]},describe:{name:"describe()",signatures:["describe(field, description?)"],description:"Adds a field to the table descriptor with the given description (optional), and returns the field name.",fields:[{name:"field",type:"string",description:"The field name"},{name:"description",type:"string",description:"The field description"}]},query:{name:"query()",signatures:["query(query)"],description:"Sets the SQL query for this materialization or assertion.",fields:[{name:"query",type:"string",description:"The SQL query to run"}]},queries:{name:"queries()",signatures:["queries(queries)"],description:"Sets the SQL queries to run in order for this operation.",fields:[{name:"query",type:"string | string[]",description:"The SQL queries to run"}]},materialize:{name:"materialize()",signatures:["materialize(name)","materialize(name, query)","materialize(name, config)"],description:"Returns a new [`Materialization`](/reference/materializations-js) with the given name.",fields:[{name:"name",type:"string",description:"The name of the materialization"},{name:"query",type:"Contextable<string>",description:"The query for the materialization"},{name:"config",type:"MaterializationConfig",typeLink:"/reference/materialization-config",description:"The configuration object for this materialization"}]},operate:{name:"operate()",signatures:["operate(name, queries?)"],description:"Returns a new [`Operation`](/reference/operations-js) with the given name.",fields:[{name:"name",type:"string",description:"The name of the operation"},{name:"queries",type:"Contextable<string | string>",description:"The query for the materialization"}]},assert:{name:"assert()",signatures:["assert(name, query)"],description:"Returns a new [`Assertion`](/reference/assertion-js) with the given name.",fields:[{name:"name",type:"string",description:"The name of the assertion"},{name:"queries",type:"Contextable<string>",description:"The query for the assertion"}]}}},278:function(e,t,n){__NEXT_REGISTER_PAGE("/reference/operations",function(){return e.exports=n(279),{page:e.exports.default}})},279:function(e,t,n){"use strict";n.r(t);var r=n(0),i=n.n(r),o=n(1),a=n(12),s=n(15),l=n(16);function c(e,t){if(null==e)return{};var n,r,i=function(e,t){if(null==e)return{};var n,r,i={},o=Object.keys(e);for(r=0;r<o.length;r++)n=o[r],t.indexOf(n)>=0||(i[n]=e[n]);return i}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(r=0;r<o.length;r++)n=o[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(i[n]=e[n])}return i}t.default=function(e){var t=e.components,n=c(e,["components"]);return i.a.createElement(o.MDXTag,{name:"wrapper",Layout:function(e){var t=e.children;return i.a.createElement(a.a,{title:"Operations reference"},t)},layoutProps:n,components:t},i.a.createElement(o.MDXTag,{name:"p",components:t},"An ",i.a.createElement(o.MDXTag,{name:"inlineCode",components:t,parentName:"p"},"operation")," defines a set of SQL commands that will be executed in order against your warehouse, and can be used for running arbitrary queries."),i.a.createElement(o.MDXTag,{name:"p",components:t},"For examples and usage, check out the ",i.a.createElement(o.MDXTag,{name:"a",components:t,parentName:"p",props:{href:"/guides/operations"}},"operations guide"),"."),i.a.createElement(s.a,l.a.ref),i.a.createElement(s.a,l.a.self))}},32:function(e,t,n){"use strict";n.d(t,"a",function(){return c});var r=n(0);function i(e){return(i="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(e){return typeof e}:function(e){return e&&"function"==typeof Symbol&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":typeof e})(e)}function o(e,t){for(var n=0;n<t.length;n++){var r=t[n];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(e,r.key,r)}}function a(e,t){return!t||"object"!==i(t)&&"function"!=typeof t?function(e){if(void 0===e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return e}(e):t}function s(e){return(s=Object.setPrototypeOf?Object.getPrototypeOf:function(e){return e.__proto__||Object.getPrototypeOf(e)})(e)}function l(e,t){return(l=Object.setPrototypeOf||function(e,t){return e.__proto__=t,e})(e,t)}var c=function(e){function t(){return function(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}(this,t),a(this,s(t).apply(this,arguments))}var n,i,c;return function(e,t){if("function"!=typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function");e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,writable:!0,configurable:!0}}),t&&l(e,t)}(t,r["Component"]),n=t,(i=[{key:"render",value:function(){return r.createElement("table",{className:"bp3-html-table bp3-html-table-striped",style:p.table},r.createElement("thead",null,r.createElement("tr",null,r.createElement("td",null,"Field"),r.createElement("td",null,"Type"),r.createElement("td",null,"Description"))),r.createElement("tbody",null,this.props.fields.map(function(e){return r.createElement("tr",{key:e.name},r.createElement("td",null,r.createElement("code",null,e.name)),r.createElement("td",null,r.createElement("code",null,e.type)),r.createElement("td",null,e.description))})))}}])&&o(n.prototype,i),c&&o(n,c),t}(),p={table:{width:"100%"}}}},[[278,1,0]]]);