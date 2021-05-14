/******/ (() => { // webpackBootstrap
/******/ 	"use strict";
/******/ 	var __webpack_modules__ = ({

/***/ "./src/guid.ts":
/*!*********************!*\
  !*** ./src/guid.ts ***!
  \*********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "Guid": () => (/* binding */ Guid)
/* harmony export */ });
class Guid {
    static newGuid() {
        return 'xxxxxxxx-xxxx-4xxx-yxxx-xxxxxxxxxxxx'.replace(/[xy]/g, function (c) {
            var r = Math.random() * 16 | 0, v = c == 'x' ? r : (r & 0x3 | 0x8);
            return v.toString(16);
        });
    }
}


/***/ }),

/***/ "./src/note.ts":
/*!*********************!*\
  !*** ./src/note.ts ***!
  \*********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "Note": () => (/* binding */ Note)
/* harmony export */ });
/* harmony import */ var _guid__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./guid */ "./src/guid.ts");

class Note {
    constructor(title, content) {
        this.id = _guid__WEBPACK_IMPORTED_MODULE_0__.Guid.newGuid();
        this.title = title;
        this.content = content;
        this.createdAt = new Date();
    }
}


/***/ }),

/***/ "./src/noteboard.ts":
/*!**************************!*\
  !*** ./src/noteboard.ts ***!
  \**************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "NoteBoard": () => (/* binding */ NoteBoard)
/* harmony export */ });
/* harmony import */ var _note__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./note */ "./src/note.ts");
/* harmony import */ var _sessionstoragestore__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./sessionstoragestore */ "./src/sessionstoragestore.ts");


class NoteBoard {
    constructor() {
        this.storage = new _sessionstoragestore__WEBPACK_IMPORTED_MODULE_1__.SessionStorageStore();
        this.addTitleInput();
        this.addContentInput();
        this.addButton();
        this.notesContainer = (document.createElement('div'));
        document.body.append(this.notesContainer);
    }
    addTitleInput() {
        const div = (document.createElement('div'));
        const span = (document.createElement('span'));
        span.textContent = "Title:";
        const titleInput = (document.createElement('input'));
        titleInput.setAttribute('type', 'text');
        titleInput.setAttribute('id', 'title');
        div.appendChild(span);
        div.appendChild(titleInput);
        document.body.appendChild(div);
    }
    addContentInput() {
        const div = (document.createElement('div'));
        const span = (document.createElement('span'));
        span.textContent = "Content:";
        const contentInput = (document.createElement('textarea'));
        contentInput.setAttribute('id', 'content');
        div.appendChild(span);
        div.appendChild(contentInput);
        document.body.appendChild(div);
    }
    addButton() {
        const div = (document.createElement('div'));
        const addButton = (document.createElement('button'));
        addButton.textContent = "Add";
        addButton.addEventListener('click', () => {
            let title = document.getElementById('title').value;
            let content = document.getElementById('content').value;
            this.storage.addNote(new _note__WEBPACK_IMPORTED_MODULE_0__.Note(title, content));
            this.refreshList();
        });
        div.appendChild(addButton);
        document.body.appendChild(div);
    }
    refreshList() {
        this.notesContainer.innerHTML = '';
        const notes = this.storage.getNotes();
        if (!notes)
            return;
        notes.forEach((item) => {
            const titleDiv = (document.createElement('div'));
            titleDiv.innerHTML = item.title;
            const contentDiv = (document.createElement('div'));
            contentDiv.innerHTML = item.content;
            const removeBtn = (document.createElement('button'));
            removeBtn.textContent = "Remove";
            removeBtn.setAttribute('data-id', item.id.toString());
            removeBtn.addEventListener('click', (e) => {
                const id = e.target.getAttribute('data-id');
                this.storage.deleteNote(id);
                this.refreshList();
            });
            this.notesContainer.appendChild(titleDiv);
            this.notesContainer.appendChild(contentDiv);
            this.notesContainer.appendChild(removeBtn);
            this.notesContainer.appendChild(document.createElement('hr'));
        }, this);
    }
}


/***/ }),

/***/ "./src/sessionstoragestore.ts":
/*!************************************!*\
  !*** ./src/sessionstoragestore.ts ***!
  \************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "SessionStorageStore": () => (/* binding */ SessionStorageStore)
/* harmony export */ });
class SessionStorageStore {
    deleteNote(id) {
        let notesValue = sessionStorage.getItem('notes');
        let notes = JSON.parse(notesValue);
        let notesWithoutRemovedElement = notes.filter(note => { return note.id != id; });
        sessionStorage.setItem('notes', JSON.stringify(notesWithoutRemovedElement));
    }
    addNote(note) {
        let notesValue = sessionStorage.getItem('notes');
        let notes = JSON.parse(notesValue);
        if (!notes) {
            notes = [];
            notes.push(note);
            sessionStorage.setItem('notes', JSON.stringify(notes));
        }
        ;
    }
    getNotes() {
        let notesValue = sessionStorage.getItem('notes');
        let notes = JSON.parse(notesValue);
        return notes;
    }
}


/***/ })

/******/ 	});
/************************************************************************/
/******/ 	// The module cache
/******/ 	var __webpack_module_cache__ = {};
/******/ 	
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/ 		// Check if module is in cache
/******/ 		var cachedModule = __webpack_module_cache__[moduleId];
/******/ 		if (cachedModule !== undefined) {
/******/ 			return cachedModule.exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = __webpack_module_cache__[moduleId] = {
/******/ 			// no module.id needed
/******/ 			// no module.loaded needed
/******/ 			exports: {}
/******/ 		};
/******/ 	
/******/ 		// Execute the module function
/******/ 		__webpack_modules__[moduleId](module, module.exports, __webpack_require__);
/******/ 	
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/ 	
/************************************************************************/
/******/ 	/* webpack/runtime/define property getters */
/******/ 	(() => {
/******/ 		// define getter functions for harmony exports
/******/ 		__webpack_require__.d = (exports, definition) => {
/******/ 			for(var key in definition) {
/******/ 				if(__webpack_require__.o(definition, key) && !__webpack_require__.o(exports, key)) {
/******/ 					Object.defineProperty(exports, key, { enumerable: true, get: definition[key] });
/******/ 				}
/******/ 			}
/******/ 		};
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/hasOwnProperty shorthand */
/******/ 	(() => {
/******/ 		__webpack_require__.o = (obj, prop) => (Object.prototype.hasOwnProperty.call(obj, prop))
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/make namespace object */
/******/ 	(() => {
/******/ 		// define __esModule on exports
/******/ 		__webpack_require__.r = (exports) => {
/******/ 			if(typeof Symbol !== 'undefined' && Symbol.toStringTag) {
/******/ 				Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });
/******/ 			}
/******/ 			Object.defineProperty(exports, '__esModule', { value: true });
/******/ 		};
/******/ 	})();
/******/ 	
/************************************************************************/
var __webpack_exports__ = {};
// This entry need to be wrapped in an IIFE because it need to be isolated against other modules in the chunk.
(() => {
/*!**********************!*\
  !*** ./src/index.ts ***!
  \**********************/
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _noteboard__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./noteboard */ "./src/noteboard.ts");

let board = new _noteboard__WEBPACK_IMPORTED_MODULE_0__.NoteBoard();
board.refreshList();

})();

/******/ })()
;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vLi9zcmMvZ3VpZC50cyIsIndlYnBhY2s6Ly8vLi9zcmMvbm90ZS50cyIsIndlYnBhY2s6Ly8vLi9zcmMvbm90ZWJvYXJkLnRzIiwid2VicGFjazovLy8uL3NyYy9zZXNzaW9uc3RvcmFnZXN0b3JlLnRzIiwid2VicGFjazovLy93ZWJwYWNrL2Jvb3RzdHJhcCIsIndlYnBhY2s6Ly8vd2VicGFjay9ydW50aW1lL2RlZmluZSBwcm9wZXJ0eSBnZXR0ZXJzIiwid2VicGFjazovLy93ZWJwYWNrL3J1bnRpbWUvaGFzT3duUHJvcGVydHkgc2hvcnRoYW5kIiwid2VicGFjazovLy93ZWJwYWNrL3J1bnRpbWUvbWFrZSBuYW1lc3BhY2Ugb2JqZWN0Iiwid2VicGFjazovLy8uL3NyYy9pbmRleC50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7OztBQUFPO0FBQ1A7QUFDQTtBQUNBO0FBQ0E7QUFDQSxTQUFTO0FBQ1Q7QUFDQTs7Ozs7Ozs7Ozs7Ozs7OztBQ1A4QjtBQUN2QjtBQUNQO0FBQ0Esa0JBQWtCLCtDQUFZO0FBQzlCO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7Ozs7Ozs7Ozs7Ozs7Ozs7O0FDUjhCO0FBQzhCO0FBQ3JEO0FBQ1A7QUFDQSwyQkFBMkIscUVBQW1CO0FBQzlDO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EscUNBQXFDLHVDQUFJO0FBQ3pDO0FBQ0EsU0FBUztBQUNUO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxhQUFhO0FBQ2I7QUFDQTtBQUNBO0FBQ0E7QUFDQSxTQUFTO0FBQ1Q7QUFDQTs7Ozs7Ozs7Ozs7Ozs7O0FDckVPO0FBQ1A7QUFDQTtBQUNBO0FBQ0EsK0RBQStELHNCQUFzQixFQUFFO0FBQ3ZGO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7Ozs7OztVQ3RCQTtVQUNBOztVQUVBO1VBQ0E7VUFDQTtVQUNBO1VBQ0E7VUFDQTtVQUNBO1VBQ0E7VUFDQTtVQUNBO1VBQ0E7VUFDQTtVQUNBOztVQUVBO1VBQ0E7O1VBRUE7VUFDQTtVQUNBOzs7OztXQ3RCQTtXQUNBO1dBQ0E7V0FDQTtXQUNBLHdDQUF3Qyx5Q0FBeUM7V0FDakY7V0FDQTtXQUNBLEU7Ozs7O1dDUEEsd0Y7Ozs7O1dDQUE7V0FDQTtXQUNBO1dBQ0Esc0RBQXNELGtCQUFrQjtXQUN4RTtXQUNBLCtDQUErQyxjQUFjO1dBQzdELEU7Ozs7Ozs7Ozs7OztBQ053QztBQUN4QyxnQkFBZ0IsaURBQVM7QUFDekIiLCJmaWxlIjoiaW5kZXguanMiLCJzb3VyY2VzQ29udGVudCI6WyJleHBvcnQgY2xhc3MgR3VpZCB7XHJcbiAgICBzdGF0aWMgbmV3R3VpZCgpIHtcclxuICAgICAgICByZXR1cm4gJ3h4eHh4eHh4LXh4eHgtNHh4eC15eHh4LXh4eHh4eHh4eHh4eCcucmVwbGFjZSgvW3h5XS9nLCBmdW5jdGlvbiAoYykge1xyXG4gICAgICAgICAgICB2YXIgciA9IE1hdGgucmFuZG9tKCkgKiAxNiB8IDAsIHYgPSBjID09ICd4JyA/IHIgOiAociAmIDB4MyB8IDB4OCk7XHJcbiAgICAgICAgICAgIHJldHVybiB2LnRvU3RyaW5nKDE2KTtcclxuICAgICAgICB9KTtcclxuICAgIH1cclxufVxyXG4iLCJpbXBvcnQgeyBHdWlkIH0gZnJvbSBcIi4vZ3VpZFwiO1xyXG5leHBvcnQgY2xhc3MgTm90ZSB7XHJcbiAgICBjb25zdHJ1Y3Rvcih0aXRsZSwgY29udGVudCkge1xyXG4gICAgICAgIHRoaXMuaWQgPSBHdWlkLm5ld0d1aWQoKTtcclxuICAgICAgICB0aGlzLnRpdGxlID0gdGl0bGU7XHJcbiAgICAgICAgdGhpcy5jb250ZW50ID0gY29udGVudDtcclxuICAgICAgICB0aGlzLmNyZWF0ZWRBdCA9IG5ldyBEYXRlKCk7XHJcbiAgICB9XHJcbn1cclxuIiwiaW1wb3J0IHsgTm90ZSB9IGZyb20gXCIuL25vdGVcIjtcclxuaW1wb3J0IHsgU2Vzc2lvblN0b3JhZ2VTdG9yZSB9IGZyb20gXCIuL3Nlc3Npb25zdG9yYWdlc3RvcmVcIjtcclxuZXhwb3J0IGNsYXNzIE5vdGVCb2FyZCB7XHJcbiAgICBjb25zdHJ1Y3RvcigpIHtcclxuICAgICAgICB0aGlzLnN0b3JhZ2UgPSBuZXcgU2Vzc2lvblN0b3JhZ2VTdG9yZSgpO1xyXG4gICAgICAgIHRoaXMuYWRkVGl0bGVJbnB1dCgpO1xyXG4gICAgICAgIHRoaXMuYWRkQ29udGVudElucHV0KCk7XHJcbiAgICAgICAgdGhpcy5hZGRCdXR0b24oKTtcclxuICAgICAgICB0aGlzLm5vdGVzQ29udGFpbmVyID0gKGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2RpdicpKTtcclxuICAgICAgICBkb2N1bWVudC5ib2R5LmFwcGVuZCh0aGlzLm5vdGVzQ29udGFpbmVyKTtcclxuICAgIH1cclxuICAgIGFkZFRpdGxlSW5wdXQoKSB7XHJcbiAgICAgICAgY29uc3QgZGl2ID0gKGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2RpdicpKTtcclxuICAgICAgICBjb25zdCBzcGFuID0gKGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ3NwYW4nKSk7XHJcbiAgICAgICAgc3Bhbi50ZXh0Q29udGVudCA9IFwiVGl0bGU6XCI7XHJcbiAgICAgICAgY29uc3QgdGl0bGVJbnB1dCA9IChkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdpbnB1dCcpKTtcclxuICAgICAgICB0aXRsZUlucHV0LnNldEF0dHJpYnV0ZSgndHlwZScsICd0ZXh0Jyk7XHJcbiAgICAgICAgdGl0bGVJbnB1dC5zZXRBdHRyaWJ1dGUoJ2lkJywgJ3RpdGxlJyk7XHJcbiAgICAgICAgZGl2LmFwcGVuZENoaWxkKHNwYW4pO1xyXG4gICAgICAgIGRpdi5hcHBlbmRDaGlsZCh0aXRsZUlucHV0KTtcclxuICAgICAgICBkb2N1bWVudC5ib2R5LmFwcGVuZENoaWxkKGRpdik7XHJcbiAgICB9XHJcbiAgICBhZGRDb250ZW50SW5wdXQoKSB7XHJcbiAgICAgICAgY29uc3QgZGl2ID0gKGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2RpdicpKTtcclxuICAgICAgICBjb25zdCBzcGFuID0gKGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ3NwYW4nKSk7XHJcbiAgICAgICAgc3Bhbi50ZXh0Q29udGVudCA9IFwiQ29udGVudDpcIjtcclxuICAgICAgICBjb25zdCBjb250ZW50SW5wdXQgPSAoZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgndGV4dGFyZWEnKSk7XHJcbiAgICAgICAgY29udGVudElucHV0LnNldEF0dHJpYnV0ZSgnaWQnLCAnY29udGVudCcpO1xyXG4gICAgICAgIGRpdi5hcHBlbmRDaGlsZChzcGFuKTtcclxuICAgICAgICBkaXYuYXBwZW5kQ2hpbGQoY29udGVudElucHV0KTtcclxuICAgICAgICBkb2N1bWVudC5ib2R5LmFwcGVuZENoaWxkKGRpdik7XHJcbiAgICB9XHJcbiAgICBhZGRCdXR0b24oKSB7XHJcbiAgICAgICAgY29uc3QgZGl2ID0gKGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2RpdicpKTtcclxuICAgICAgICBjb25zdCBhZGRCdXR0b24gPSAoZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnYnV0dG9uJykpO1xyXG4gICAgICAgIGFkZEJ1dHRvbi50ZXh0Q29udGVudCA9IFwiQWRkXCI7XHJcbiAgICAgICAgYWRkQnV0dG9uLmFkZEV2ZW50TGlzdGVuZXIoJ2NsaWNrJywgKCkgPT4ge1xyXG4gICAgICAgICAgICBsZXQgdGl0bGUgPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZCgndGl0bGUnKS52YWx1ZTtcclxuICAgICAgICAgICAgbGV0IGNvbnRlbnQgPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZCgnY29udGVudCcpLnZhbHVlO1xyXG4gICAgICAgICAgICB0aGlzLnN0b3JhZ2UuYWRkTm90ZShuZXcgTm90ZSh0aXRsZSwgY29udGVudCkpO1xyXG4gICAgICAgICAgICB0aGlzLnJlZnJlc2hMaXN0KCk7XHJcbiAgICAgICAgfSk7XHJcbiAgICAgICAgZGl2LmFwcGVuZENoaWxkKGFkZEJ1dHRvbik7XHJcbiAgICAgICAgZG9jdW1lbnQuYm9keS5hcHBlbmRDaGlsZChkaXYpO1xyXG4gICAgfVxyXG4gICAgcmVmcmVzaExpc3QoKSB7XHJcbiAgICAgICAgdGhpcy5ub3Rlc0NvbnRhaW5lci5pbm5lckhUTUwgPSAnJztcclxuICAgICAgICBjb25zdCBub3RlcyA9IHRoaXMuc3RvcmFnZS5nZXROb3RlcygpO1xyXG4gICAgICAgIGlmICghbm90ZXMpXHJcbiAgICAgICAgICAgIHJldHVybjtcclxuICAgICAgICBub3Rlcy5mb3JFYWNoKChpdGVtKSA9PiB7XHJcbiAgICAgICAgICAgIGNvbnN0IHRpdGxlRGl2ID0gKGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2RpdicpKTtcclxuICAgICAgICAgICAgdGl0bGVEaXYuaW5uZXJIVE1MID0gaXRlbS50aXRsZTtcclxuICAgICAgICAgICAgY29uc3QgY29udGVudERpdiA9IChkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdkaXYnKSk7XHJcbiAgICAgICAgICAgIGNvbnRlbnREaXYuaW5uZXJIVE1MID0gaXRlbS5jb250ZW50O1xyXG4gICAgICAgICAgICBjb25zdCByZW1vdmVCdG4gPSAoZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnYnV0dG9uJykpO1xyXG4gICAgICAgICAgICByZW1vdmVCdG4udGV4dENvbnRlbnQgPSBcIlJlbW92ZVwiO1xyXG4gICAgICAgICAgICByZW1vdmVCdG4uc2V0QXR0cmlidXRlKCdkYXRhLWlkJywgaXRlbS5pZC50b1N0cmluZygpKTtcclxuICAgICAgICAgICAgcmVtb3ZlQnRuLmFkZEV2ZW50TGlzdGVuZXIoJ2NsaWNrJywgKGUpID0+IHtcclxuICAgICAgICAgICAgICAgIGNvbnN0IGlkID0gZS50YXJnZXQuZ2V0QXR0cmlidXRlKCdkYXRhLWlkJyk7XHJcbiAgICAgICAgICAgICAgICB0aGlzLnN0b3JhZ2UuZGVsZXRlTm90ZShpZCk7XHJcbiAgICAgICAgICAgICAgICB0aGlzLnJlZnJlc2hMaXN0KCk7XHJcbiAgICAgICAgICAgIH0pO1xyXG4gICAgICAgICAgICB0aGlzLm5vdGVzQ29udGFpbmVyLmFwcGVuZENoaWxkKHRpdGxlRGl2KTtcclxuICAgICAgICAgICAgdGhpcy5ub3Rlc0NvbnRhaW5lci5hcHBlbmRDaGlsZChjb250ZW50RGl2KTtcclxuICAgICAgICAgICAgdGhpcy5ub3Rlc0NvbnRhaW5lci5hcHBlbmRDaGlsZChyZW1vdmVCdG4pO1xyXG4gICAgICAgICAgICB0aGlzLm5vdGVzQ29udGFpbmVyLmFwcGVuZENoaWxkKGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2hyJykpO1xyXG4gICAgICAgIH0sIHRoaXMpO1xyXG4gICAgfVxyXG59XHJcbiIsImV4cG9ydCBjbGFzcyBTZXNzaW9uU3RvcmFnZVN0b3JlIHtcclxuICAgIGRlbGV0ZU5vdGUoaWQpIHtcclxuICAgICAgICBsZXQgbm90ZXNWYWx1ZSA9IHNlc3Npb25TdG9yYWdlLmdldEl0ZW0oJ25vdGVzJyk7XHJcbiAgICAgICAgbGV0IG5vdGVzID0gSlNPTi5wYXJzZShub3Rlc1ZhbHVlKTtcclxuICAgICAgICBsZXQgbm90ZXNXaXRob3V0UmVtb3ZlZEVsZW1lbnQgPSBub3Rlcy5maWx0ZXIobm90ZSA9PiB7IHJldHVybiBub3RlLmlkICE9IGlkOyB9KTtcclxuICAgICAgICBzZXNzaW9uU3RvcmFnZS5zZXRJdGVtKCdub3RlcycsIEpTT04uc3RyaW5naWZ5KG5vdGVzV2l0aG91dFJlbW92ZWRFbGVtZW50KSk7XHJcbiAgICB9XHJcbiAgICBhZGROb3RlKG5vdGUpIHtcclxuICAgICAgICBsZXQgbm90ZXNWYWx1ZSA9IHNlc3Npb25TdG9yYWdlLmdldEl0ZW0oJ25vdGVzJyk7XHJcbiAgICAgICAgbGV0IG5vdGVzID0gSlNPTi5wYXJzZShub3Rlc1ZhbHVlKTtcclxuICAgICAgICBpZiAoIW5vdGVzKSB7XHJcbiAgICAgICAgICAgIG5vdGVzID0gW107XHJcbiAgICAgICAgICAgIG5vdGVzLnB1c2gobm90ZSk7XHJcbiAgICAgICAgICAgIHNlc3Npb25TdG9yYWdlLnNldEl0ZW0oJ25vdGVzJywgSlNPTi5zdHJpbmdpZnkobm90ZXMpKTtcclxuICAgICAgICB9XHJcbiAgICAgICAgO1xyXG4gICAgfVxyXG4gICAgZ2V0Tm90ZXMoKSB7XHJcbiAgICAgICAgbGV0IG5vdGVzVmFsdWUgPSBzZXNzaW9uU3RvcmFnZS5nZXRJdGVtKCdub3RlcycpO1xyXG4gICAgICAgIGxldCBub3RlcyA9IEpTT04ucGFyc2Uobm90ZXNWYWx1ZSk7XHJcbiAgICAgICAgcmV0dXJuIG5vdGVzO1xyXG4gICAgfVxyXG59XHJcbiIsIi8vIFRoZSBtb2R1bGUgY2FjaGVcbnZhciBfX3dlYnBhY2tfbW9kdWxlX2NhY2hlX18gPSB7fTtcblxuLy8gVGhlIHJlcXVpcmUgZnVuY3Rpb25cbmZ1bmN0aW9uIF9fd2VicGFja19yZXF1aXJlX18obW9kdWxlSWQpIHtcblx0Ly8gQ2hlY2sgaWYgbW9kdWxlIGlzIGluIGNhY2hlXG5cdHZhciBjYWNoZWRNb2R1bGUgPSBfX3dlYnBhY2tfbW9kdWxlX2NhY2hlX19bbW9kdWxlSWRdO1xuXHRpZiAoY2FjaGVkTW9kdWxlICE9PSB1bmRlZmluZWQpIHtcblx0XHRyZXR1cm4gY2FjaGVkTW9kdWxlLmV4cG9ydHM7XG5cdH1cblx0Ly8gQ3JlYXRlIGEgbmV3IG1vZHVsZSAoYW5kIHB1dCBpdCBpbnRvIHRoZSBjYWNoZSlcblx0dmFyIG1vZHVsZSA9IF9fd2VicGFja19tb2R1bGVfY2FjaGVfX1ttb2R1bGVJZF0gPSB7XG5cdFx0Ly8gbm8gbW9kdWxlLmlkIG5lZWRlZFxuXHRcdC8vIG5vIG1vZHVsZS5sb2FkZWQgbmVlZGVkXG5cdFx0ZXhwb3J0czoge31cblx0fTtcblxuXHQvLyBFeGVjdXRlIHRoZSBtb2R1bGUgZnVuY3Rpb25cblx0X193ZWJwYWNrX21vZHVsZXNfX1ttb2R1bGVJZF0obW9kdWxlLCBtb2R1bGUuZXhwb3J0cywgX193ZWJwYWNrX3JlcXVpcmVfXyk7XG5cblx0Ly8gUmV0dXJuIHRoZSBleHBvcnRzIG9mIHRoZSBtb2R1bGVcblx0cmV0dXJuIG1vZHVsZS5leHBvcnRzO1xufVxuXG4iLCIvLyBkZWZpbmUgZ2V0dGVyIGZ1bmN0aW9ucyBmb3IgaGFybW9ueSBleHBvcnRzXG5fX3dlYnBhY2tfcmVxdWlyZV9fLmQgPSAoZXhwb3J0cywgZGVmaW5pdGlvbikgPT4ge1xuXHRmb3IodmFyIGtleSBpbiBkZWZpbml0aW9uKSB7XG5cdFx0aWYoX193ZWJwYWNrX3JlcXVpcmVfXy5vKGRlZmluaXRpb24sIGtleSkgJiYgIV9fd2VicGFja19yZXF1aXJlX18ubyhleHBvcnRzLCBrZXkpKSB7XG5cdFx0XHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywga2V5LCB7IGVudW1lcmFibGU6IHRydWUsIGdldDogZGVmaW5pdGlvbltrZXldIH0pO1xuXHRcdH1cblx0fVxufTsiLCJfX3dlYnBhY2tfcmVxdWlyZV9fLm8gPSAob2JqLCBwcm9wKSA9PiAoT2JqZWN0LnByb3RvdHlwZS5oYXNPd25Qcm9wZXJ0eS5jYWxsKG9iaiwgcHJvcCkpIiwiLy8gZGVmaW5lIF9fZXNNb2R1bGUgb24gZXhwb3J0c1xuX193ZWJwYWNrX3JlcXVpcmVfXy5yID0gKGV4cG9ydHMpID0+IHtcblx0aWYodHlwZW9mIFN5bWJvbCAhPT0gJ3VuZGVmaW5lZCcgJiYgU3ltYm9sLnRvU3RyaW5nVGFnKSB7XG5cdFx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIFN5bWJvbC50b1N0cmluZ1RhZywgeyB2YWx1ZTogJ01vZHVsZScgfSk7XG5cdH1cblx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsICdfX2VzTW9kdWxlJywgeyB2YWx1ZTogdHJ1ZSB9KTtcbn07IiwiaW1wb3J0IHsgTm90ZUJvYXJkIH0gZnJvbSBcIi4vbm90ZWJvYXJkXCI7XHJcbmxldCBib2FyZCA9IG5ldyBOb3RlQm9hcmQoKTtcclxuYm9hcmQucmVmcmVzaExpc3QoKTtcclxuIl0sInNvdXJjZVJvb3QiOiIifQ==