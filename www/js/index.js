/*
 * Licensed to the Apache Software Foundation (ASF) under one
 * or more contributor license agreements.  See the NOTICE file
 * distributed with this work for additional information
 * regarding copyright ownership.  The ASF licenses this file
 * to you under the Apache License, Version 2.0 (the
 * "License"); you may not use this file except in compliance
 * with the License.  You may obtain a copy of the License at
 *
 * http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing,
 * software distributed under the License is distributed on an
 * "AS IS" BASIS, WITHOUT WARRANTIES OR CONDITIONS OF ANY
 * KIND, either express or implied.  See the License for the
 * specific language governing permissions and limitations
 * under the License.
 */
var app = {
    
    initialize: function() {
        document.addEventListener('deviceready', this.onDeviceReady, false);   
    },
    
    onDeviceReady: function() {
        $( "[data-role='header']" ).toolbar({ theme: "a" }); 
        
        app.isOnline();
        
        $( "#pic" ).click(function() {
            app.takePic();
        });
        
        $("#srch").click(function() { 
            app.navigate();
        });
        
        $("#find").click(function() {
            app.findContact();
        });

    },
    
    isOnline: function() {
        if (navigator.network.connection.type !== Connection.NONE) {
            $( "#netinfo" ).replaceWith( "<h4>Device Online</h4>" );
        }
    
    },
    
    takePic: function() {
        navigator.camera.getPicture(this.onSuccess, this.onFail, { destinationType: Camera.DestinationType.FILE_URI });
    },
    
    onSuccess: function(imageURI) {
        $( "#photo" ).attr("src", imageURI);
    },
    
    onFail: function(message) {
        navigator.notification.alert('Failed because: ' + message);
    },
    
    navigate: function() {
        var addr = $("#text-basic").val(); 
        directions.navigateToAddress(addr);
    },
    
    findContact: function() { 
        navigator.contacts.pickContact(function(contact){ 
            var disName = contact.displayName;    
            var phone = contact.phoneNumbers[0].value;
            var br = "<br>";
            var tact = br + "Name: " + disName + br + "Phone Number: " + phone;
            $( "#results" ).append( tact );
        });
    }
    
};

app.initialize();
















