/**
 * !!!
 * WARNING!
 * !!!
 * If you use this make sure you change the applicable data* values
 * 
 * data-for*="positions1
 * data-field-values*="committees1
 * data-field-values*="meetingDates1
 * data-for*="meetingTypes1
 * data-name="Department1
 * data-name="Division1
 * data-name="ItemType1
 */

//add below in main document.ready()
_FormOptions1.loadOptions1();

//add below in unique area on form
var FormOptions1 = function () { };
var _FormOptions1 = new FormOptions1;
(function () {
    var committees = [];
    var departments = [];
    var divisions = [];

    FormOptions1.prototype.loadOptions1 = function (savedValues) {
        var $form1 = $("#FormHtml");
        var formOptions1 = {
            $committeeSelectsForPositions: $form1.find('[data-field-values*="committees1"]').filter(' [data-field-hasvalue*="false"]').filter(' [data-for*="positions1"]'),
            $committeeSelectsForMeetingTypes: $form1.find('[data-field-values*="committees1"]').filter(' [data-field-hasvalue*="false"]').filter(' [data-for*="meetingTypes1"]'),
            $meetingTypeSelects: $form1.find('[data-field-values*="meetingTypes1"]').filter('[data-field-hasvalue*="false"]'),
            $positionSelects: $form1.find('[data-field-values*="positions1"]').filter(' [data-field-hasvalue*="false"]'),
            $meetingDateSelects: $form1.find('[data-field-values*="meetingDates1"]').filter(' [data-field-hasvalue*="false"]'),
            $meetingSectionSelects: $form1.find('[data-field-values*="meetingSections1"]').filter(' [data-field-hasvalue*="false"]')
        }

        loadCommittees();

        if ($('[data-name="Department1"]').length) {
            loadDepartments($('[data-name="Department1"]').attr('id'));
        }
        if ($('[data-name="Division1"]').length) {
            loadDivisions($('[data-name="Division1"]').attr('id'));
        }
        if ($('[data-name="ItemType1"]').length) {
            loadItemtypes($('[data-name="ItemType1"]').attr('id'));
        }

        function loadCommitteeSelects() {
            var totSelects = formOptions1.$committeeSelectsForMeetingTypes.length +
                formOptions1.$committeeSelectsForPositions.length;

            var selectsLoaded = 0;

            $.each(formOptions1.$committeeSelectsForMeetingTypes, function (index, comSelect) {
                selectsLoaded++;

                $("#" + comSelect.id).append($("<option></option>").val(0).html("Select Committee"));

                $.each(committees, function (ind, committee) {
                    $("#" + comSelect.id).append($("<option></option>").val(committee.id).html(committee.name));
                });

                $("#" + comSelect.id).on("change", function () {
                    loadMeetingTypes($("#" + comSelect.id).val(), comSelect.id);
                });
            });

            $.each(formOptions1.$committeeSelectsForPositions, function (idx, select) {
                selectsLoaded++;

                $("#" + select.id).append($("<option></option>").html("Select Committee"));

                $.each(committees, function (ind, committee) {
                    $("#" + select.id).append($("<option></option>").val(committee.id).html(committee.name));
                });

                $("#" + select.id).on("change", function () {
                    loadComitteePositions($("#" + select.id).val(), select.id);
                });
            });

            if (savedValues !== undefined && selectsLoaded === totSelects) {
                loadSelectValues(savedValues);
            }
        }

        function loadSelectValues(values) {
            //load select values
            $.each(values, function (key, item) {
                var fld = $('select').filter("#" + key);
                if (fld.length === 0) {
                    return;
                }
                else {
                    //committee selects are already loaded. 
                    if (fld.data("field-values") === "committees") {
                        fld.val(item).trigger("change");
                    }
                    else {
                        fld.data("field-value", item);
                    }
                }
            });
        }

        function loadCommittees() {
            $.post(ROOT + "api/committee/list/", null, function (data) {
                committees = data;
            })
                .fail(function (jqXHR, status, error) {
                })
                .always(function () {
                    loadCommitteeSelects();
                });
        }

        function loadDepartments(id) {
            $("#" + id).empty(); // Remove all <option> child tags.
            $("#" + id).append($("<option></option>"));

            $.get('/api/department/list', function (data) {
                $.each(data, function (index, item) { // Iterates through a collection
                    $("#" + id).append( // Append an object to the inside of the select box
                        $("<option></option>") // Yes you can do this.
                            .text(item.name)
                            .val(item.id)
                    );
                });
            })
                .fail(function (jqXHR, status, error) {
                    alert("To use the department lookup you must add some departments list from the 'Admin' > 'Lookups' menu.");
                })
                .always(function () {

                });
        }

        function loadDivisions(id) {
            $("#" + id).empty(); // Remove all <option> child tags.
            $("#" + id).append($("<option></option>"));

            $.get('/api/division/list', function (data) {
                $.each(data, function (index, item) { // Iterates through a collection
                    $("#" + id).append( // Append an object to the inside of the select box
                        $("<option></option>") // Yes you can do this.
                            .text(item.name)
                            .val(item.id)
                    );
                });
            })
                .fail(function (jqXHR, status, error) {
                    alert("To use the division lookup you must add some divisions list from the 'Admin' > 'Lookups' menu.");
                })
                .always(function () {

                });
        }

        function loadItemtypes(id) {
            $("#" + id).empty(); // Remove all <option> child tags.
            $("#" + id).append($("<option></option>"));

            $.get('/api/systemitemtype/list', function (data) {
                $("#" + id).on("change", function () {
                    loadItemTypeCustomFields($(this).val(), $(this).text());
                });

                $.each(data, function (index, item) { // Iterates through a collection
                    $("#" + id).append( // Append an object to the inside of the select box
                        $("<option></option>") // Yes you can do this.
                            .text(item.name)
                            .val(item.id)
                    );
                });
            })
                .fail(function (jqXHR, status, error) {
                    alert("There was an error getting the item types from the system or they do not exist and need to be created.");
                })
                .always(function () {

                });
        }

        function loadItemTypeCustomFields(val, text) {
            $("#InfoForm").append('<div class="row"><div class="col-md-6"><label for="' + + '">' + + '</label><span style="color: red;">*</span>');
        }

        function loadMeetingTypes(committeeId, selectId) {
            if (committeeId === "0") return;
            $.getJSON(ROOT + "api/meetingtype/ListActiveMeetingTypes/" + "?committeeId=" + committeeId, null, function (data) {
                var select = $form1.find('[data-dependent-on="' + selectId + '"]');

                $("#" + select[0].id).find("option").remove();
                $("#" + select[0].id).append($("<option></option>").val(0).html("Select Meeting Type"));

                var val = select.data("field-value");
                var opts = data.length;
                var optsAdded = 0;

                $("#" + select[0].id).on("change", function () { loadMeetingDates($("#" + select[0].id).val(), select[0].id); });

                if (data.length > 0) {
                    $.each(data, function (idx, type) {
                        optsAdded++;

                        $("#" + select[0].id).append($("<option></option>").val(type.id).html(type.name));

                        checkForSettingVal(opts, optsAdded, val, select[0].id);
                    });
                }
                else {
                    $("#" + select[0].id).append($("<option></option>").val("").html("No meetings types."));
                }

            })
                .fail(function (jqXHR, status, error) {

                })
                .always(function () {

                });
        }

        function loadMeetingDates(meetingTypeId, meetingTypeSelectId) {
            if (meetingTypeId === "0") return;

            $.getJSON(ROOT + "api/meeting/listupcomingbymeetingtype/?meetingTypeId=" + meetingTypeId, null, function (data) {
                var select = $form1.find('[data-dependent-on="' + meetingTypeSelectId + '"]');

                if (formOptions1.$meetingSectionSelects.length > 0) {
                    $("#" + select[0].id).on("change", function () { loadMeetingSections($("#" + select[0].id).val(), select[0].id); });
                }

                $("#" + select[0].id).find("option").remove();
                $("#" + select[0].id).append($("<option></option>").val(0).html("Select Meeting Date"));

                var val = select.data("field-value");
                var opts = data.length;
                var optsAdded = 0;

                if (data.length > 0) {
                    $.each(data, function (index, meeting) {
                        optsAdded++;

                        var date = new Date(meeting.scheduledEvent.start);

                        $("#" + select[0].id).append($("<option></option>").val(meeting.id).data("title", meeting.title).html((date.getMonth() + 1) + "/" + date.getDate() + "/" + date.getFullYear()));

                        checkForSettingVal(opts, optsAdded, val, select[0].id);
                    });
                }
                else {
                    $("#" + select[0].id).append($("<option></option>").val("").html("No upcoming meetings"));
                }
            })
                .fail(function (jqXHR, status, error) {

                })
                .always(function () {

                });
        }

        function loadMeetingSections(meetingId, meetingDataSelectId) {
            if (meetingId === "0") return;

            $.getJSON(ROOT + "api/meetingsectiontemplate/list/?meetingId=" + meetingId, null, function (data) {
                var select = $form1.find('[data-dependent-on="' + meetingDataSelectId + '"]');

                $("#" + select[0].id).find("option").remove();
                $("#" + select[0].id).append($('<option></option>').val(0).html("Select Section"));

                var opts = data.length;
                var optsAdded = 0;
                var val = select.data("field-value");

                $.each(data, function (index, section) {
                    optsAdded++;

                    $("#" + select[0].id).append($("<option></option>").val(section.meetingSectionId).html(section.name));

                    checkForSettingVal(opts, optsAdded, val, select[0].id);
                });
            })
                .fail(function (jqXHR, status, error) {

                })
                .always(function () {

                });
        }

        function loadComitteePositions(committeeId, comSelectId) {
            if (committeeId === "0") return;

            $.getJSON(ROOT + "api/committeeposition/list/" + "?committeeId=" + committeeId, null, function (data) {
                var select = $form1.find('[data-dependent-on="' + comSelectId + '"]');

                $("#" + select[0].id).find("option").remove();
                $("#" + select[0].id).append($("<option></option>").val(0).html("Select Position"));

                var val = select.data("field-value");
                var opts = data.length;
                var optsAdded = 0;

                if (data.length > 0) {
                    $.each(data, function (idx, type) {
                        optsAdded++;

                        $("#" + select[0].id).append($("<option></option>").val(type.id).html(type.name));

                        checkForSettingVal(opts, optsAdded, val, select[0].id);
                    });
                }
                else {
                    $("#" + select[0].id).append($("<option></option>").val("").html("No Committee Positions."));
                }
            })
                .fail(function (jqXHR, status, error) {

                })
                .always(function () {

                });
        }

        function checkForSettingVal(opts, optsAdded, val, id) {
            if (val !== undefined && opts === optsAdded) {
                $("#" + id).val(val).trigger("change");
            }
        }
    }
})();
