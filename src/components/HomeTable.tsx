import { ScrollView, StyleSheet, Text, View } from 'react-native';

export default function HomeTable() {
    const family = [
        {name: "apu", description: "leírás"},
        {name: "anyu", description: "leírás"},
        {name: "Botond", description: "leírás"},
        {name: "Marica", description: "leírás"},
        {name: "Csabi", description: "leírás"},
        {name: "Attila", description: "leírás"},
        {name: "Ákos", description: "leírás"},
    ]

    const daysOfTheWeek = [
        "", "hétfő", "kedd", "szerda", "csütörtök", "péntek", "szombat", "vasárnap"
    ]

    return (
        <ScrollView style={styles.table}>
            <View style={styles.tableHeader}>
                {daysOfTheWeek.map((day, index) => {
                    return (
                        <View key={day}>
                            <Text style={[index == 0 ? "" : styles.td, styles]}>{day}</Text>
                        </View>
                    );
                })}
            </View>
            {family.map((person) => {
                return (
                    <View style={styles.tableBody} key={person.name}>
                        <Text style={[styles.td, styles.tdBorder]}>{person.name}</Text>
                        <Text style={[styles.td, styles.tdBorder]}>{person.description}</Text>
                    </View>
                );
            })}
        </ScrollView>
    );
}

const styles = StyleSheet.create({
    table: {
        display: 'flex',
        flexDirection: 'row'
    },
    tableHeader: {
        display: 'flex',
        flexDirection: 'row'
    },
    tableBody: {
        display: 'flex',
        flexDirection: 'row',
    },
    td: {
        margin: '1rem',
        padding: '0.5rem',
        width: '5rem'
    },
    tdBorder: {
        border: 'solid 1.5px blue',
        'border-radius': '3px',
    }
})