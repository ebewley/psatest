'use strict';

import * as userModels from '../models/user';
import * as angular from 'angular/angular.min';

/**
 * Service collection.
 */
let appServices = angular
    .module("myApp.appServices", [])
    .config(["$httpProvider", function ($httpProvider) {}]);

/**
 * Creates the appStoreService and adds it to the service collection.
 */
appServices.factory("appStoreService", [

    /**
     * AppStoreService initializer.
     *
     * @returns {Object} AppStoreService instance.
     */
    function () {

        // Create the service object.
        let service = {

            //#region *** Variables ***
            /**
             * Returns the initialization value for the app state object.
             */
            get initialState() {
                return {
                    /**
                     * Returns the entity representing the current user.
                     */
                    currentUser: null,

                    /**
                     * Returns information pertaining to users known by the system.
                     */
                    users: {
                        /**
                         * Returns the list of users known by the system.
                         */
                        items: [
                            {
                                FirstName: "Eric",
                                LastName: "Bewley",
                                UserID: 1,
                            },
                            { FirstName: "Jane", LastName: "Doe", UserID: 2 },
                            { FirstName: "John", LastName: "Smith", UserID: 4 },
                        ],

                        /**
                         * Returns the last date/time the data service refreshed the list.
                         */
                        lastRefresh: new Date(0),
                    },
                };
            },
            //#endregion

            //#region *** Properties ***
            /**
             * Returns the current user entity or null if not set.
             *
             * @returns {User} User entity of current user if set, else null.
             */
            get currentUser() {
                return { ...service.state.currentUser };
            },

            /**
             * Sets/clears the current user assignment.
             *
             * @param {User | number} userOrID Either a reference to a User entity or the ID of the entity to reference.
             */
            set currentUser(userOrID) {
                // If userOrID is not defined, null, false or zero, clear the currentUser reference.
                if (!userOrID) {
                    service.state.currentUser = null;
                    return;
                }

                // Else if userOrID is defined but not a number, then assume it to be a reference to a User entity.
                if (userOrID && isNaN(userOrID)) {
                    service.state.currentUser = userOrID;
                    return;
                }

                // Else if userOrID is a number locate the specified entity.
                if (userOrID && !isNaN(userOrID)) {
                    service.state.currentUser = service.state.users.find(
                        (user) => user.UserID === userOrID
                    );
                    return;
                }

                // Else throw an exception.
                throw "The value supplied to currentUser is not a User entity or number.";
            },

            get state() { return service.state; },
            //#endregion

            //#region *** Methods ***
            /**
             * Returns a collection of matching User entities.
             *
             * @param {User} filters Filter parameters to apply to the result set.
             * @returns {User[]} Collection of matching User entities.
             */
            getUsers: (filters: userModels.User = new userModels.User()) => {
                // If a UserID filter was provided, return the first matching entity.
                if (filters.UserID)
                    return matchingUsers.find(
                        (user) => user.UserID === filters.UserID
                    );

                // Otherwise get a copy of the complete users list which will keep the app state immutable.
                var matchingUsers = service.state.users.items.slice();

                // If FirstName and/or LastName filters were supplied, filter the list, else leave it intact.
                if (filters.FirstName)
                    matchingUsers = matchingUsers.filter((user) =>
                        user.FirstName.contains(filters.FirstName)
                    );
                if (filters.LastName)
                    matchingUsers = matchingUsers.filter((user) =>
                        user.LastName.contains(filters.LastName)
                    );

                // Return the collection.
                return service.state.users.items.slice();
            },
            //#endregion
        };

        // Return service object.
        return service;
    },
]);
