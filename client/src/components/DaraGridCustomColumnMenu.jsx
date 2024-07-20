// import { GridColumnMenuContainer, GridColumnMenuItem } from "@mui/x-data-grid";
// import MenuItem from "@mui/material/MenuItem";
// import { useState } from "react";

// const CustomColumnMenu = (props) => {
//   const { hideMenu, currentColumn, open, apiRef } = props;
//   const [filterValue, setFilterValue] = useState("");

//   const handleFilterChange = (event) => {
//     setFilterValue(event.target.value);
//   };

//   const applyFilter = () => {
//     apiRef.current.setFilterModel({
//       items: [
//         {
//           columnField: currentColumn.field,
//           operatorValue: "contains",
//           value: filterValue,
//         },
//       ],
//     });
//     hideMenu();
//   };

//   const handleHideColumn = () => {
//     apiRef.current.setColumnVisibility(currentColumn.field, false);
//     hideMenu();
//   };

//   return (
//     <GridColumnMenuContainer
//       hideMenu={hideMenu}
//       currentColumn={currentColumn}
//       open={open}
//     >
//       <GridColumnMenuItem>
//         <input
//           type="text"
//           value={filterValue}
//           onChange={handleFilterChange}
//           placeholder={`Filter ${currentColumn.headerName}`}
//         />
//         <button onClick={applyFilter}>Apply Filter</button>
//       </GridColumnMenuItem>
//       <GridColumnMenuItem onClick={handleHideColumn}>
//         Hide Column
//       </GridColumnMenuItem>
//     </GridColumnMenuContainer>
//   );
// };

// export default CustomColumnMenu;
