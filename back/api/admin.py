from django.contrib import admin
from .models import DiscussionTheme, Day, TimeSlot, Client, Appointment

class TimeSlotInline(admin.TabularInline):
    model = TimeSlot
    extra = 7 # 1 week

class DayAdmin(admin.ModelAdmin):
    inlines = [TimeSlotInline]
    list_display = ['date', 'is_available']
    list_filter = ['date', 'is_available']

class TimeSlotAdmin(admin.ModelAdmin):
    list_display = ['day', 'formatted_start_time', 'formatted_end_time', 'is_available', 'is_reserved']
    list_filter = ['day', 'is_available', 'is_reserved']

    def formatted_start_time(self, obj):
        # Форматирование времени начала слота
        return obj.start_time.strftime('%H:%M')

    def formatted_end_time(self, obj):
        # Форматирование времени окончания слота
        return obj.end_time.strftime('%H:%M')
    
    formatted_start_time.admin_order_field = 'start_time'
    formatted_start_time.short_description = 'Время начала сеанса'  # Задаем название колонки в админке
    formatted_end_time.admin_order_field = 'end_time'
    formatted_end_time.short_description = 'Время конца сеанса'  # Задаем название колонки в админке
   

class AppointmentAdmin(admin.ModelAdmin):
    list_display = ['client', 'time_slot', 'date_created']
    list_filter = ['client', 'time_slot']

class DiscussionThemeAdmin(admin.ModelAdmin):
    list_display = ['name']

class ClientAdmin(admin.ModelAdmin):
    list_display = ['name', 'email', 'phone']

admin.site.register(DiscussionTheme, DiscussionThemeAdmin)
admin.site.register(Day, DayAdmin)
admin.site.register(TimeSlot, TimeSlotAdmin)
admin.site.register(Client, ClientAdmin)
admin.site.register(Appointment, AppointmentAdmin)