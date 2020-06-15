// You are in charge of the taxi pickup schedule at the airport.  Each day, the taxi companies will tell you how many people they would like to pick up.  Based on how many people request a taxi, you are responsible for dividing them up amongst the taxi companies to relation to how many people they requested

// you will receive an array of objects for each taxi company and how many customers they requested for that day
// you will also receive the total amount of customers for that day

// return the order that each company will receive a customer
// they can only receive more than one customers in a row if no other companies are eligible for the rest of that day
// there will always be at least one company requesting customers
// if there are no customers that day, return 'No customers today.'
// if there are more customers than taxis to pick them, add that amount to the end of the list

function taxiPickup(taxiReq = [], customers = 0) {
    if (!customers) return 'No customers today.';
    // get the total requested customers from all companies
    let initialValue = 0;
    let totalReqCustomers = taxiReq.reduce((total, company) => {
        return total += company.reqCount
    }, initialValue);
    // add each companies percentage of the total requested customers to the object for each company
    taxiReq.forEach(company => {
        // get the percentage each company is alloted and multiply times the customers for that day
        let compTotalCustomers = (company.reqCount / totalReqCustomers) * customers;
        // since you cannot have a percentage of a person, each company must get a whole number
        company.totalCustomers = Math.round(compTotalCustomers);
    });

    // sort the companies by the total customers
    taxiReq.sort((a, b) => b.totalCustomers - a.totalCustomers);

    // keep a list of each company in the order they receive customers
    const companyOrder = [];
    // how many customers are left
    let customersLeft = customers;
    // the index of companies that have requested customers
    let j = 0;

    // keep sending companies customers as long as there are still customers and as long as the companies haven't reached their capacity
    while (customersLeft > 0 && companyOrder.length <= totalReqCustomers) {
        // if we have reached the end the list of companies
        if (j >= taxiReq.length) {
            j = 0;
        }

        if (taxiReq[j].totalCustomers && companyOrder[companyOrder.length - 1] !== taxiReq[j].name) {
            // add to the end of the list
            companyOrder.push(taxiReq[j].name);
            // subtract from their customers left
            taxiReq[j].totalCustomers -= 1;
            taxiReq[j].reqCount -= 1;
            // subtract from the overall customers left
            customersLeft -= 1;
        } else if (taxiReq[j].totalCustomers) {
            for (let q = 0; q < taxiReq.length; q++) {
                if (taxiReq[j].name !== taxiReq[q].name && taxiReq[q].totalCustomers) {
                    j = q;
                    break;
                }
            }
        }
        j++;
    }
    const extraCust = customers - totalReqCustomers;
    if (extraCust > 0) {
        companyOrder.push(`There were ${extraCust} additional customers who did not get a taxi.`);
    }
    return companyOrder;
}

const company1 = { name: 'Super Fast Taxis', reqCount: 13 };
const company2 = { name: 'Taxi Me Away', reqCount: 6 };
const company3 = { name: 'Purple Cab', reqCount: 18 };
const company4 = { name: 'Prancing Prius Phleet', reqCount: 4 };
const company5 = { name: 'Luxury Cabs', reqCount: 5 };
const company6 = { name: 'Runway Transport', reqCount: 11 };
const company7 = { name: 'Just Taxis', reqCount: 4 };
const company8 = { name: 'Exclusive Rides', reqCount: 1 };

console.log(taxiPickup([company1, company2, company3, company4, company5, company6, company7, company8], 17));
// [
//     'Purple Cab',
//     'Super Fast Taxis',
//     'Runway Transport',
//     'Taxi Me Away',
//     'Prancing Prius Phleet',
//     'Luxury Cabs',
//     'Just Taxis',
//     'Purple Cab',
//     'Super Fast Taxis',
//     'Runway Transport',
//     'Taxi Me Away',
//     'Purple Cab',
//     'Super Fast Taxis',
//     'Runway Transport',
//     'Purple Cab',
//     'Super Fast Taxis',
//     'Purple Cab'
// ]

console.log(taxiPickup([company1, company2, company3, company4, company5, company6, company7, company8], 9));
// [
//     'Purple Cab',
//     'Super Fast Taxis',
//     'Runway Transport',
//     'Taxi Me Away',
//     'Prancing Prius Phleet',
//     'Luxury Cabs',
//     'Just Taxis',
//     'Purple Cab',
//     'Super Fast Taxis'
// ]

console.log(taxiPickup([company2, company3, company4, company6, company8], 0));
// No customers today.

console.log(taxiPickup([company2, company3, company4, company6, company8], 87));
// [
//     'Purple Cab',
//     'Runway Transport',
//     'Taxi Me Away',
//     'Prancing Prius Phleet',
//     'Exclusive Rides',
//     'Purple Cab',
//     'Runway Transport',
//     'Taxi Me Away',
//     'Prancing Prius Phleet',
//     'Exclusive Rides',
//     'Purple Cab',
//     'Runway Transport',
//     'Taxi Me Away',
//     'Prancing Prius Phleet',
//     'Purple Cab',
//     'Runway Transport',
//     'Taxi Me Away',
//     'Prancing Prius Phleet',
//     'Purple Cab',
//     'Runway Transport',
//     'Taxi Me Away',
//     'Prancing Prius Phleet',
//     'Purple Cab',
//     'Runway Transport',
//     'Taxi Me Away',
//     'Prancing Prius Phleet',
//     'Purple Cab',
//     'Runway Transport',
//     'Taxi Me Away',
//     'Prancing Prius Phleet',
//     'Purple Cab',
//     'Runway Transport',
//     'Taxi Me Away',
//     'Prancing Prius Phleet',
//     'Purple Cab',
//     'Runway Transport',
//     'Taxi Me Away',
//     'Prancing Prius Phleet',
//     'Purple Cab',
//     'Runway Transport',
//     'Taxi Me Away',
//     'There were 47 additional customers who did not get a taxi'
// ]