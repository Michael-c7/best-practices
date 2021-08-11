// the Flyweight pattern



/* Before the flyweight pattern*/
    // var Book = function( id, title, author, genre, pageCount,publisherID, ISBN, checkoutDate, checkoutMember, dueReturnDate,availability ){
    //    this.id = id;
    //    this.title = title;
    //    this.author = author;
    //    this.genre = genre;
    //    this.pageCount = pageCount;
    //    this.publisherID = publisherID;
    //    this.ISBN = ISBN;
    //    this.checkoutDate = checkoutDate;
    //    this.checkoutMember = checkoutMember;
    //    this.dueReturnDate = dueReturnDate;
    //    this.availability = availability;
    // };

    // Book.prototype = {
    //   getTitle: function () {
    //      return this.title;
    //   },

    //   getAuthor: function () {
    //      return this.author;
    //   },

    //   getISBN: function (){
    //      return this.ISBN;
    //   },

    //   // For brevity, other getters are not shown
    //   updateCheckoutStatus: function( bookID, newStatus, checkoutDate, checkoutMember, newReturnDate ){
    //      this.id = bookID;
    //      this.availability = newStatus;
    //      this.checkoutDate = checkoutDate;
    //      this.checkoutMember = checkoutMember;
    //      this.dueReturnDate = newReturnDate;
    //   },

    //   extendCheckoutPeriod: function( bookID, newReturnDate ){
    //       this.id = bookID;
    //       this.dueReturnDate = newReturnDate;
    //   },

    //   isPastDue: function(bookID){
    //      var currentDate = new Date();
    //      return currentDate.getTime() > Date.parse( this.dueReturnDate );
    //    }
    // };










// Flyweight optimized version
var Book = function ( title, author, genre, pageCount, publisherID, ISBN ) {
    this.title = title;
    this.author = author;
    this.genre = genre;
    this.pageCount = pageCount;
    this.publisherID = publisherID;
    this.ISBN = ISBN;
};




/*A Basic Factory*/
    // Book Factory singleton
    var BookFactory = (function () {
        var existingBooks = {}, existingBook;

        return {
        createBook: function ( title, author, genre, pageCount, publisherID, ISBN ) {

            // Find out if a particular book meta-data combination has been created before
            // !! or (bang bang) forces a boolean to be returned
            existingBook = existingBooks[ISBN];
            if ( !!existingBook ) {
            return existingBook;
            } else {

            // if not, let's create a new instance of the book and store it
            var book = new Book( title, author, genre, pageCount, publisherID, ISBN );
            existingBooks[ISBN] = book;
            return book;

            }
        }
        };

    })();




/*Managing the extrinsic states*/
    // BookRecordManager singleton
    var BookRecordManager = (function () {
    
        var bookRecordDatabase = {};
    
        return {
        // add a new book into the library system
        addBookRecord: function ( id, title, author, genre, pageCount, publisherID, ISBN, checkoutDate, checkoutMember, dueReturnDate, availability ) {
    
            var book = BookFactory.createBook( title, author, genre, pageCount, publisherID, ISBN );
    
            bookRecordDatabase[id] = {
            checkoutMember: checkoutMember,
            checkoutDate: checkoutDate,
            dueReturnDate: dueReturnDate,
            availability: availability,
            book: book
            };
        },
        updateCheckoutStatus: function ( bookID, newStatus, checkoutDate, checkoutMember, newReturnDate ) {
    
            var record = bookRecordDatabase[bookID];
            record.availability = newStatus;
            record.checkoutDate = checkoutDate;
            record.checkoutMember = checkoutMember;
            record.dueReturnDate = newReturnDate;
        },
    
        extendCheckoutPeriod: function ( bookID, newReturnDate ) {
            bookRecordDatabase[bookID].dueReturnDate = newReturnDate;
        },
    
        isPastDue: function ( bookID ) {
            var currentDate = new Date();
            return currentDate.getTime() > Date.parse( bookRecordDatabase[bookID].dueReturnDate );
        }
        };
    
    })();












/*The Flyweight pattern and the DOM*/
    /*Instead of binding the click to multiple elements,
    we can easily attach a Flyweight to the top of our
    container which can listen for events coming from below*/

        /*<div id="container">
        <div class="toggle" href="#">More Info (Address)
            <span class="info">
                This is more information
            </span></div>
        <div class="toggle" href="#">Even More Info (Map)
            <span class="info">
                <iframe src="http://www.map-generator.net/extmap.php?name=London&amp;address=london%2C%20england&amp;width=500...gt;"</iframe>
            </span>
        </div>
        </div>*/

        /*var stateManager = {
            fly: function () {

                var self = this;

                $( "#container" )
                    .unbind()
                    .on( "click", "div.toggle", function ( e ) {
                        self.handleClick( e.target );
                    });
            },

            handleClick: function ( elem ) {
                $( elem ).find( "span" ).toggle( "slow" );
            }
        };*/