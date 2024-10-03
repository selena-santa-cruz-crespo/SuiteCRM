export class CalendarElements{
    constructor(){
        this.iframeBody=null
    }
    setIframe(){
        return cy.getIframe('body > app-root > div > scrm-classic-view-ui > div > iframe').then((iframe)=>{
            this.iframeBody=iframe
        })
    }
    meeting_data(){
        return cy.fixture('calendar_meeting_data.json')
    }
    schedule_meeting_page(){
        return cy.get('.ng-star-inserted > .top-nav-link')
                .contains('Calendar')
                .get('.ng-star-inserted > a')
                .contains('Schedule Meeting')

    }
    first_title1(){
        return cy.wrap(this.iframeBody).find('.header-module-title')
    }
    second_title(){
        return cy.wrap(this.iframeBody).find('.module-title-text-breadcrumbs-create')
    }
    start_date1(){
        return cy.wrap(this.iframeBody).find('[field="date_start"] >.dateTime >tbody > tr > td > input')
    }
    end_date(){
        return cy.wrap(this.iframeBody).find('[field="date_end"] >.dateTime >tbody > tr > td > input')
    }
    location_field(){
        return cy.wrap(this.iframeBody).find('[data-field="location"] > [field="location"] > input')
    }
    select_duration(){
        return cy.wrap(this.iframeBody).find('select#duration > [label="1 hour"]')
    }
    description_field1(){
        return cy.wrap(this.iframeBody).find('#description')
    }
    save_button1(){
        return cy.wrap(this.iframeBody).find('[title="Save [Alt+a]"]')
    }
    subject_error_message1(){
        return cy.wrap(this.iframeBody).find('.row.edit-view-row > [data-field="name"] > [field="name"] > .required.validation-message')
    }
    start_date_error_message(){
        return cy.wrap(this.iframeBody).find('.dateTimeComboColumn.datecalendar > #date_start_trigger + div')
    }
    end_date_error_message(){
        return cy.wrap(this.iframeBody).find('.dateTimeComboColumn.datecalendar > #date_end_trigger + div')
    }




    activity_meeting_data(){
        return cy.fixture('calendar_activity_meeting_data.json')
    }
    calendar_page(){
        return cy.get('.ng-star-inserted > .top-nav-link')
                .contains('Calendar')
    }
    title(){
        return cy.wrap(this.iframeBody).find('.moduleTitle')
    }
    today_free_all_day1(){
        return cy.wrap(this.iframeBody).find('td.fc-today').first()
    }
    today_free_all_day2(){
        return cy.wrap(this.iframeBody).find('td.fc-today').first()
    }
    meeting_title1(){
        return cy.wrap(this.iframeBody).find('#title-cal-edit')
    }
    meeting_title2(){
        return cy.wrap(this.iframeBody).find('#title-cal-edit')
    }
    meeting_start_date(){
        return cy.wrap(this.iframeBody).find('#date_start_date')
    }
    meeting_end_date(){
        return cy.wrap(this.iframeBody).find('#date_end_date')
    }
    meeting_location_field(){
        return cy.wrap(this.iframeBody).find('#location')
    }
    meeting_description_field(){
        return cy.wrap(this.iframeBody).find('#description')
    }
    meeting_save_button(){
        return cy.wrap(this.iframeBody).find('#btn-save')
    }
    meeting_subject_error_message(){
        return cy.wrap(this.iframeBody).find('.required.validation-message').eq(0)
    }
    meeting_start_date_error_message(){
        return cy.wrap(this.iframeBody).find('.required.validation-message').eq(1)
    }
    meeting_end_date_error_message(){
        return cy.wrap(this.iframeBody).find('.required.validation-message').eq(3)
    }

    week_filter_button(){
        return cy.wrap(this.iframeBody).find('#agendaWeek-tab')
    }
    days_list(){
        return cy.wrap(this.iframeBody).find('th.fc-day-header')
    }
    settings_button(){
        return cy.wrap(this.iframeBody).find('.btn.btn-info')
    }
    settings_form_title(){
        return cy.wrap(this.iframeBody).find('#pagecontent > div.modal.fade.modal-calendar-settings.in > div > div > div.modal-header > h4')
    }
    settings_form_start_hours(){
        return cy.wrap(this.iframeBody).find('#day_start_hours')
    }
    settings_form_end_hours(){
        return cy.wrap(this.iframeBody).find('#day_end_hours')
    }
    settings_save_button(){
        return cy.wrap(this.iframeBody).find('#btn-save-settings')
    }
    start_hour_day(){
        return cy.wrap(this.iframeBody).find('.fc-axis.fc-time.fc-widget-content > span').first()
    }
    end_hour_day(){
        return cy.wrap(this.iframeBody).find('.fc-axis.fc-time.fc-widget-content > span').last()
    }
    call_form_button(){
        return cy.wrap(this.iframeBody).find('#radio_call')
    }


    call_data(){
        return cy.fixture('calendar_call_data.json')
    }
    schedule_call_page(){
        return cy.get('.ng-star-inserted > .top-nav-link')
                .contains('Calendar')
                .get('.ng-star-inserted > a')
                .contains('Schedule Call')
    }
    first_title2(){
        return cy.wrap(this.iframeBody).find('.header-module-title')
    }
    second_title(){
        return cy.wrap(this.iframeBody).find('.module-title-text-breadcrumbs-create')
    }
    start_date2(){
        return cy.wrap(this.iframeBody).find('#date_start_date')
    }
    duration_hours(){
        return cy.wrap(this.iframeBody).find('#duration_hours')
    }
    description_field2(){
        return cy.wrap(this.iframeBody).find('#description')
    }
    save_button2(){
        return cy.wrap(this.iframeBody).find('[title="Save [Alt+a]"]')
    }
    subject_error_message2(){
        return cy.wrap(this.iframeBody).find('.row.edit-view-row > [data-field="name"] > [field="name"] > .required.validation-message')
    }
    start_date_error_message(){
        return cy.wrap(this.iframeBody).find('.dateTimeComboColumn.datecalendar > #date_start_trigger + div')
    }
    duration_hours_error_message(){
        return cy.wrap(this.iframeBody).find('[field="duration_hours"] > .required.validation-message')
    }



    task_data(){
        return cy.fixture('calendar_task_data.json')
    }
    schedule_task_page(){
        return cy.get('.ng-star-inserted > .top-nav-link')
                .contains('Calendar')
                .get('.ng-star-inserted > a')
                .contains('Create Task')
    }
    first_title(){
        return cy.get('.record-view-name-label > .dynamic-label').eq(0)
    }
    start_date3(){
        return cy.get('[placeholder="yyyy-mm-dd hh:mm"]').eq(0)
    }
    due_date(){
        return cy.get('[placeholder="yyyy-mm-dd hh:mm"]').eq(1)
    }
    description_field3(){
        return cy.get('.ng-star-inserted > textarea')
    }
    contact_field(){
        return cy.get('.p-dropdown-label')
    }
    contact_field_search(){
        return cy.get('.p-dropdown-filter-container > .p-inputtext')
    }
    contact_field_result(){
        return cy.get('#pn_id_1_0 > .ng-star-inserted')
    }
    save_button3(){
        return cy.get('[type="button"]').contains('Save')
    }
    subject_error_message3(){
        return cy.get('.dynamic-label.ng-star-inserted').eq(1)
    }
    priority_error_message(){
        return cy.get('.dynamic-label.ng-star-inserted').eq(2)
    }
}