/*
Pseudocode example from traverse media
https://youtu.be/pCvZtjoRq1I?t=427
*/



// pretend the user vists this profile
/*
    http://yourapp.com/users/profile/1
*/


/*
ROUTES
    users/profiles/:id = Users.getProfile(id)
*/


/*
CONTROLLERS
    class User {
        function getProfile(id) {
            profile = this.UserModel.getProfile(id)

            renderView("users/profile", profile)
        }
    }
*/


/*
MODELS
    class UserModel {
        function getProfile(id) {
            data = this.db.get("SELECT * FROM users WHERE id = id")
            return data;
        }
    }
*/


/*
 VIEWS
    /users
        /profile
        <h1>{{profile.name}}</h1>
        <ul>
            <li>Email: {{profile.email}}</il>
            <li>Phone: {{profile.phone}}</il>
        </ul>
 */
